const express = require('express');
const { createRestaurant, getAllRestaurants } = require('../controllers/restaurantController');
const { findNearestRestaurant } = require('../controllers/findNearestRestaurant');
const { isAuthenticated, restrictToAdmin } = require('../utils/auth');

const router = express();

router.route("/restaurants/create").post(isAuthenticated,restrictToAdmin,createRestaurant);
router.route("/restaurants").get(getAllRestaurants);
router.route("/nearest-restaurants").post(findNearestRestaurant);

module.exports = router;