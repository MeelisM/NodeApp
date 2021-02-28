const express = require('express');
const router = express.Router();
const verifyTokenAndUser = require('../middleware/verifyToken');

const {
  renderLoginPage,
  userLogin,
  userLogout,
  addMovie,
  renderDashboard,
  registerUser,
  renderRegister,
  renderIndex,
  deleteMovie,
  editMovie,
  renderEditMovie,
} = require('../controllers');

router.get('/', renderIndex);

router.get('/register', renderRegister);
router.post('/register', registerUser);

router.get('/login', renderLoginPage);
router.post('/login', userLogin);
router.get('/logout', userLogout);

router.get('/dashboard', verifyTokenAndUser, renderDashboard);

router.post('/movies', verifyTokenAndUser, addMovie);
router.delete('/movies/:id', verifyTokenAndUser, deleteMovie);

router.get('/movies/edit/:id', verifyTokenAndUser, renderEditMovie);
router.put('/movies/edit/:id', editMovie);

module.exports = router;
