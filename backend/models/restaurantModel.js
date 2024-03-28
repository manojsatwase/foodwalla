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
    required: [true, 'Please enter Email'],
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'],
  },
  logo: {
    public_id: String,
    url: String,
  },
  description: {
    type: String,
    required: [true, 'Please enter a description'],
    trim: true,
    minlength: [10, 'Description should be at least 10 characters long'],
    maxlength: [500, 'Description should not exceed 500 characters'],
  },
  rating: {
    type: Number,
    default: 0, // Default rating value
    min: 0,
    max: 5, // Assuming a 5-star rating system
  },
  price: {
    type: Number,
    required: [true, 'Please enter the average price for two'],
    min: 0, // Assuming price cannot be negative
  },
  address: {
    type: String,
    required: [true, 'Please enter the address'],
    trim: true,
    minlength: [5, 'Address should be at least 5 characters long'],
    maxlength: [100, 'Address should not exceed 100 characters'],
  },
  pincode: {
    type: Number,
    required: [true, 'Please enter the pincode'],
    unique: true,
  },
  openAt: {
    type: String,
    required: [true, 'Please enter the opening time'],
    validate: {
      validator: function(value) {
        // Regular expression to validate time format in 24-hour format
        return /^([01]\d|2[0-3]):([0-5]\d)$/.test(value);
      },
      message: 'Opening time should be in 24-hour format (e.g., "07:00")',
    },
  },  
  location: {
    type: {
      type: String,
      default: 'Point',
      enum: ['Point'],
    },
    coordinates: {
      type: [Number],
      default: [0, 0],
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