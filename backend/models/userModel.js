const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: [true, "Please enter Username"],
        trim: true,
    },
    email: {
        type: String,
        unique: true,
        required: [true, "Please enter Email"],
        trim: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'],
    },
    password: {
        type: String,
        required: [true, "Please enter Password"],
        minlength: [6, 'Password must be at least 6 characters long'],
    },
    avatar: {
        public_id: String,
        url: String,
    },
    gender: {
        type: String,
        enum: ["male", "female"],
        required: [true, "Please select Gender"],
    },
    dob: {
        type: Date,
        required: [true, "Please enter Date of Birth"],
    },
    role: {
        type: String,
        enum: ['Admin', 'Customer', 'Owner'],
        default: 'Customer',
    },
    isOwner: {
        type: Boolean,
        default: false,
    },
    created_at: {
        type: Date,
        default: Date.now,
    }
});


userSchema.pre("save", async function (next) {
   if (this.isModified("password")) {
       try {
           const hashedPassword = await bcrypt.hash(this.password, 10);
           this.password = hashedPassword;
           next();
       } catch (error) {
           next(error);
       }
   } else {
       next();
   }
});


userSchema.methods.generateAuthToken = async function () {
   const token = await jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '1day' });
   return token;
};

userSchema.methods.matchPassword = async function (password) {
   try {
       const isMatch = await bcrypt.compare(password, this.password);
       return isMatch;
   } catch (error) {
       throw new Error("Error comparing passwords");
   }
};


const userModel = mongoose.model("User",userSchema);

module.exports = userModel;