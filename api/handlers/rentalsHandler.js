const { Customer } = require("../../src/db/models/customer");
const { Movie } = require("../../src/db/models/movie");
const { validateRental, Rental } = require("../../src/db/models/rental");
const getRentalsHandler = async (req, res) => {
  const rentals = await Rental.find().sort("-dateOut");
  res.send(rentals);
};

const postRentalsHandler = async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const customer = await Customer.findById(req.body.customerId);
  if (!customer) return res.status(400).send("Invalid customer");

  const movie = await Movie.findById(req.body.movieId);
  if (!movie) return res.status(400).send("Invalid movie");

  if (movie.numberInStock === 0)
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
  rental = await rental.save();

  movie.numberInStock--;
  movie.save();

  res.send(rental);
};

module.exports = { getRentalsHandler, postRentalsHandler };
