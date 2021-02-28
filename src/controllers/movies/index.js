const Movie = require('../../models/movie.model');

const addMovie = async (req, res) => {
  try {
    await Movie.create({
      title: req.body.movieTitle,
      director: req.body.movieDirector,
      year: req.body.movieYear,
      image: req.body.movieImage,
    });

    res.redirect('/dashboard');
  } catch (error) {
    res.redirect(`/dashboard?message=${encodeURIComponent('Something went wrong')}`);
  }
};

const editMovie = async (req, res) => {
  Movie.findById(req.params.id, function (err, movie) {
    if (err) res.redirect(`/movies/edit/:id?message=${encodeURIComponent('Something went wrong')}`);

    movie.title = req.body.movieTitle;
    movie.director = req.body.movieDirector;
    movie.year = req.body.movieYear;
    movie.image = req.body.movieImage;

    movie.save(function (err) {
      if (err) res.redirect(`/dashboard?message=${encodeURIComponent('Something went wrong')}`);
      else res.redirect('/dashboard');
    });
  });
};
const deleteMovie = async (req, res) => {
  await Movie.findByIdAndDelete(req.params.id);
  res.redirect('/dashboard');
};

const renderEditMovie = async (req, res) => {
  const movie = await Movie.findById(req.params.id);
  res.render('edit', { records: movie });
};

module.exports = {
  addMovie,
  deleteMovie,
  editMovie,
  renderEditMovie,
};
