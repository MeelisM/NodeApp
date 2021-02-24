const Movies = require('../../models/movie.model');

const addMovie = async (req, res) => {
  try {
    await Movies.create(req.body);
    res.status(200).json({ message: 'Success' });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = {
  addMovie,
};
