const asyncHandler = require('express-async-handler');
const Restaurant = require('../models/restaurantModel');
const cloudinary = require("cloudinary");

exports.createRestaurant = asyncHandler(async(req,res)=>{
        try {
          const { name, business_email,logo,description,rating,price,address,openAt,pincode,location} = req.body;
         
         //   const myCloud = await cloudinary.v2.uploader.upload(logo,{
         //     folder:"restaurant-logo"
         //  });
          // Create a new restaurant instance
          const newRestaurant = await Restaurant.create({
            name,
            business_email,
            logo,
            address,
            rating,
            pincode,
            price,
            openAt,
            description,
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