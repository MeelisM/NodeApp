const userLogout = (req, res) => {
  res.clearCookie('jwt_token');
  res.redirect(`/login?message=${encodeURIComponent("You've been logged out!")}`);
};
module.exports = { userLogout };
