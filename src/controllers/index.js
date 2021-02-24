const login = require('./login');
const movies = require('./movies/');
const logout = require('./logout/');
const dashboard = require('./dashboard');
const register = require('./register');
const index = require('./index/index');

module.exports = {
  ...login,
  ...movies,
  ...logout,
  ...dashboard,
  ...register,
  ...index,
};
