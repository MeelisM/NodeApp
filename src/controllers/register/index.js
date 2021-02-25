const User = require('../../models/user.model');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const renderRegister = (req, res) => {
  res.render('register');
};

const registerUser = async (req, res) => {
  const emailCheck = await User.findOne({ email: req.body.email });
  if (emailCheck) return res.redirect(`/register?message=${encodeURIComponent('Email already in use!')}`);

  const passwordHash = bcryptjs.hashSync(req.body.password);

  const registrationData = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: passwordHash,
    email: req.body.email,
  });

  const token = jwt.sign({ id: req.body.email }, process.env.JWT_SECRET);
  res.cookie('jwt_token', token, { httpOnly: true });

  try {
    await registrationData.save();
    res.redirect('/dashboard');
  } catch (err) {
    res.status(400).send(err);
  }
};

module.exports = { registerUser, renderRegister };
