const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter the name'],
    trim: true, // Trim whitespace from input
    minlength: [2, 'Name should be at least 2 characters long'],
    maxlength: [50, 'Name should not exceed 50 characters'],
  },
  business_email: {
    type: String,
    unique: true,
    required: [true, "Please enter Email"],
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'],
  },
  logo:{
    public_id: String,
    url: String,
  },
  address: {
    type: String,
    required: [true, 'Please enter the address'],
    trim: true, // Trim whitespace from input
    minlength: [5, 'Address should be at least 5 characters long'],
    maxlength: [100, 'Address should not exceed 100 characters'],
  },
  pincode:{
    type:Number,
    required: [true, 'Please enter the pincode'],
    unique: true,
  },
  location: {
    type: {
      type: String,
      default: 'Point',
      enum: ['Point'],
    },
    coordinates: {
      type: [Number],
      default: [0, 0], // Default coordinates
      index: '2dsphere', 
    },
  },
});

restaurantSchema.path('location.type').validate(function (value) {
  return value === 'Point';
}, 'Invalid location type. Must be "Point".');

// Define 2dsphere index on the location field for geospatial querying
// restaurantSchema.index({ location: '2dsphere' });


module.exports = mongoose.model('Restaurant', restaurantSchema);


