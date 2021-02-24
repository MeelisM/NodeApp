const Movie = require('../../models/movie.model');

const renderDashboard = async (req, res) => {
  Movie.find({}).exec(function (err, data) {
    if (err) throw err;
    res.render('dashboard', { records: data });
  });
};

module.exports = {
  renderDashboard,
};
