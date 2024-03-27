const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const menuSchema = new Schema({
    name: {
        type: String,
        required: [true, "Please enter Name"],
    },
    image: {
        type: String,
        required: [true, "Please enter Image URL"],
    },
    price: {
        type: Number,
        required: [true, "Please enter Price"],
    },
    size: {
        type: String,
        required: [true, "Please enter Size"],
    },
    description: {
        type: String,
        required: [true, "Please enter Description"],
    },
    category: {
        type: String,
        required: [true, "Please enter Category"],
        trim: true,
    },
    isVegetarian: {
        type: Boolean,
        default: false,
    },
    ingredients: {
        type: [String],
        required: [true, "Please enter Ingredients"],
    },
}, { timestamps: true });

module.exports = mongoose.model('Menu', menuSchema);
