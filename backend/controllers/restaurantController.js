const asyncHandler = require('express-async-handler');
const Restaurant = require('../models/restaurantModel');

exports.createRestaurant = asyncHandler(async(req,res)=>{

        try {
          const { name, address, location } = req.body;

          // Create a new restaurant instance
          const newRestaurant = new Restaurant({
            name,
            address,
            location: {
              type: 'Point',
              coordinates: [location.longitude, location.latitude],
            },
          });
         
          // Save the new restaurant to the database
          await newRestaurant.save();
      
         return res.status(201).json({
            success: true,
            message: 'Restaurant created successfully',
            restaurant: newRestaurant,
          });
        } catch (error) {
          console.error(error);
          res.status(500).json({
            success: false,
            message: 'Failed to create restaurant',
            error: error.message,
          });
        }
 })

exports.getAllRestaurants = asyncHandler(async (req, res) => {
    try {
        // Fetch all restaurants from the database
        const restaurants = await Restaurant.find();

        return res.status(200).json({
            success: true,
            message: 'All restaurants retrieved successfully',
            restaurants,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch restaurants',
            error: error.message,
        });
    }
});