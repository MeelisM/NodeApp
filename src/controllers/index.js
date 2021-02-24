const login = require('./login');
const addMovie = require('./movies/addMovie');

module.exports = {
  ...login,
  ...addMovie,
};
