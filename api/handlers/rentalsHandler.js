const { Customer } = require("../../src/db/models/customer");
const { Movie } = require("../../src/db/models/movie");
const { validateRental, Rental } = require("../../src/db/models/rental");
const Fawn = require("fawn");
const mongoose = require("mongoose");

Fawn.init(mongoose);

const getRentalsHandler = async (req, res) => {
  const rentals = await Rental.find().sort("-dateOut");
  res.send(rentals);
};

const postRentalsHandler = async (req, res) => {
  const { error } = validateRental(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const customer = await Customer.findById(req.body.customerId);
  if (!customer) return res.status(400).send("Invalid customer");

  const movie = await Movie.findById(req.body.movieId);
  if (!movie) return res.status(400).send("Invalid movie");

  if (movie.stock === 0)
    return res.status(400).send("The movie is not currently in stock");

  let rental = new Rental({
    customer: {
      _id: customer._id,
      name: customer.name,
      phone: customer.phone,
    },
    movie: {
      _id: movie._id,
      title: movie.title,
      rentalRate: movie.rentalRate,
    },
  });

  const session = mongoose.startSession();
  (await session).startTransaction();

  await rental.save({ session: session });
  await Movie.findByIdAndUpdate(
    { _id: movie._id },
    { $inc: { stock: -1 } },
    { session: session }
  );

  try {
    new Fawn.Task()
      .save("rentals", rental)
      .update(
        "movies",
        { _id: movie._id },
        {
          $inc: {
            stock: -1,
          },
        }
      )
      .run();
  } catch (err) {
    return res.status(500).send("Something failed");
  }

  res.send(rental);
};

module.exports = { getRentalsHandler, postRentalsHandler };
