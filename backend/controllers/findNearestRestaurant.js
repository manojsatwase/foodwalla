const Restaurant = require('../models/restaurantModel');
const asyncHandler = require('express-async-handler');
const { EARTH_RADIUS_METERS } = require('../utils/constant');

exports.findNearestRestaurant = asyncHandler(async (req, res) => {
    try {
        const { distance,location, } = req.body;
     
        // Assuming location is provided as an object with 'longitude' and 'latitude' properties
        const longitude = parseFloat(location.longitude);
        const latitude = parseFloat(location.latitude)
        
        const userLocation = {
            type: 'Point',
            coordinates: [longitude,latitude],
        };
        
        // Find the nearby restaurant within distance provide by the user's location
        
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
            }
        ]);
      
        if(nearbyRestaurant?.length){
            return res.status(200).json({
                success: true,
                restaurant: nearbyRestaurant,
            });
        }
           
        return res.status(200).json({
            success: true,
            message: `No nearby restaurants found within ${distance}m of your location.`,
        }); 
        
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            error: error.message,
        });
    }
});
