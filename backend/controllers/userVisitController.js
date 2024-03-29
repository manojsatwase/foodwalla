const UserVisitInfo = require('../models/userVisitModel');
const Restaurant = require('../models/restaurantModel');
const asyncHandler = require('express-async-handler');
const {EARTH_RADIUS_METERS } = require('../utils/constant');

exports.createUserVisitInfo = asyncHandler(async (req, res) => {
    try {
        const { name, age, gender,distance = 500, location } = req.body;
        
        // Assuming location is provided as an object with 'longitude' and 'latitude' properties
        const longitude = parseFloat(location.longitude);
        const latitude = parseFloat(location.latitude)
        
        const userLocation = {
            type: 'Point',
            coordinates: [longitude,latitude],
        };
       
        // Find the nearby restaurant within 500m of the user's location
        const nearbyRestaurant = await Restaurant.aggregate([
            {
                $geoNear: {
                near: {
                    type: 'Point',
                    coordinates: userLocation.coordinates // Note the order: [longitude, latitude]
                },
                key:"location",
                maxDistance: parseFloat(distance * EARTH_RADIUS_METERS), // Convert distance meters to radians using accurate Earth's radius
                distanceField: 'dist.calculated',  
                spherical: true
                }
            },
        ]);
 
        if (nearbyRestaurant?.length) {
            // Check if the user has already visited this restaurant
            const existingVisit = await UserVisitInfo.find({name});
            if (existingVisit?.length) {
                // User has already visited this restaurant, return the details
                return res.status(200).json({
                    success: true,
                    message: 'You have already visited this restaurant.',
                    restaurants: nearbyRestaurant,
                });
            }else{
               // Save the new user visit information with restaurant reference
               const restaurantId = [];
               for(let restaurant of nearbyRestaurant){
                restaurantId.push(restaurant._id);
               }
               
                await UserVisitInfo.create({
                name,
                age,
                gender,
                distance,
                location: userLocation,
                restaurantId,
             })
            
                return res.status(201).json({
                    success: true,
                    message: 'Thank you for visiting the restaurant.',
                    restaurants:nearbyRestaurant 
                });
           }       
        }
        return res.status(200).json({
            success: true,
            message: `No nearby restaurants found within ${distance} KM of your location.`,
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
