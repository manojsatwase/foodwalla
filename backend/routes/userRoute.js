const express = require('express');
const { isAuthenticated, restrictToAdmin } = require('../utils/auth');
const { register, login, logout, myProfile, updatedPassword, updateProfile, getAllUsers } = require('../controllers/userController');

const router = express();

router.route("/register")
      .post(register);
router.route("/login")
      .post(login);
router.route("/logout")
      .get(logout)
router.route("/me")
      .get(isAuthenticated,myProfile)
      .post(isAuthenticated,updateProfile);
router.route("/update-password")
       .post(isAuthenticated,updatedPassword);
router.route("/admin/users")
       .get(isAuthenticated,restrictToAdmin,getAllUsers);

module.exports = router;