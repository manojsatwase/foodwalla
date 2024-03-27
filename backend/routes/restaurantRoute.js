const express = require('express');
const { createRestaurant, getAllRestaurants } = require('../controllers/restaurantController');

const router = express();

router.route("/restaurants/create").post(createRestaurant);
router.route("/restaurants").get(getAllRestaurants)

module.exports = router;