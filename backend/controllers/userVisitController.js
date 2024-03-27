const UserVisitInfo = require('../models/userVisitModel');
const Restaurant = require('../models/restaurantModel');
const asyncHandler = require('express-async-handler');
const { maxDistanceRadians } = require('../utils/constant');

exports.createUserVisitInfo = asyncHandler(async (req, res) => {
    try {
        const { name, age, gender, location } = req.body;
        // Assuming location is provided as an object with 'longitude' and 'latitude' properties
        const userLocation = {
            type: 'Point',
            coordinates: [location.longitude, location.latitude],
        };
       
        // Find the nearby restaurant within 500m of the user's location
        // Use maxDistanceRadians in Mongoose query
            const nearbyRestaurant = await Restaurant.findOne({
                location: {
                    $near: {
                        $geometry: {
                            type: 'Point',
                            coordinates: userLocation.coordinates,
                        },
                        $maxDistance: Number(maxDistanceRadians), // Convert to number
                    },
                },
            });
        
        if (nearbyRestaurant) {
            // Check if the user has already visited this restaurant
            const existingVisit = await UserVisitInfo.findOne({
                name,
                restaurant: nearbyRestaurant._id,
            });
          
            if (existingVisit) {
                // User has already visited this restaurant, return the details
                return res.status(200).json({
                    success: true,
                    message: 'You have already visited this restaurant.',
                    restaurant: nearbyRestaurant,
                    visitInfo: existingVisit,
                });
            }else{
               // Save the new user visit information with restaurant reference
            const userVisitInfo = await UserVisitInfo.create({
                name,
                age,
                gender,
                location: userLocation,
                restaurant: nearbyRestaurant._id,
            });
            return res.status(201).json({
                success: true,
                message: 'Thank you for visiting the restaurant.',
                userVisitInfo,
            });
           }       
        }
        return res.status(200).json({
            success: true,
            message: 'No nearby restaurants found within 500m of your location.',
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Failed to create user visit information.',
            error: error.message,
        });
    }
});
