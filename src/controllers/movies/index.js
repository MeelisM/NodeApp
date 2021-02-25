const Movie = require('../../models/movie.model');

const addMovie = async (req, res) => {
  try {
    await Movie.create({ title: req.body.movieTitle, director: req.body.movieDirector, year: req.body.movieYear, image: req.body.movieImage });

    res.redirect('/dashboard');
  } catch (error) {
    res.redirect(`/dashboard?message=${encodeURIComponent('Something went wrong')}`);
  }
};

const deleteMovie = async (req, res) => {
  await Movie.findByIdAndDelete(req.params.id);
  res.redirect('/dashboard');
};

module.exports = {
  addMovie,
  deleteMovie,
};
