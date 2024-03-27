const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Customer ID is required'],
    },
    items: {
        type: Object,
        required: [true, 'Items are required'],
    },
    phone: {
        type: String,
        required: [true, 'Phone number is required'],
        validate: {
            validator: function (v) {
                return /\d{10}/.test(v); 
            },
            message: 'Please enter a valid phone number',
        },
    },
    address: {
        type: String,
        required: [true, 'Address is required'],
    },
    paymentType: {
        type: String,
        default: 'COD',
        enum: ['COD', 'Online'], // Allow only specified payment types
        required: [true, 'Payment type is required'],
    },
    paymentStatus: {
        type: Boolean,
        default: false,
    },
    status: {
        type: String,
        default: 'order_placed',
    },
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
