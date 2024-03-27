const mongoose = require('mongoose');

const userVisitInfoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter Name"],
    },
    age: {
        type: Number,
        required: [true, "Please enter Age"],
    },
    gender: {
        type: String,
        enum: ["male", "female"],
        required: [true, "Please enter Gender"],
    },
    distance:{
        type:Number,
        required: [true, 'Please enter the distance'],
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
        },
    },
    restaurantId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant',
        required: true,
    }],
    created_at: {
        type: Date,
        default: Date.now,
    }
});

// Index the location field for geospatial queries
userVisitInfoSchema.index({ location: '2dsphere' });

const UserVisitInfo = mongoose.model('UserVisitInfo', userVisitInfoSchema);

module.exports = UserVisitInfo;
