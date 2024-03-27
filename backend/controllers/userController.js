const User = require("../models/userModel");
const cloudinary = require("cloudinary");

exports.register = async (req, res) => {
    try {
        const { username,email,password,avatar,gender,dob } = req.body;
      
        // Check if user with the same email already exists
        let existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User with this email already exists"
            });
        }
        
        const myCloud = await cloudinary.v2.uploader.upload(avatar,{
            folder:"avatars"
        });

        // Create a new user
        const user = await User.create({
            username,email,password,avatar,gender,dob,
            avatar: {
                public_id: myCloud.public_id,
                url: myCloud.secure_url
            }
        });

        const token = await user.generateAuthToken();
          
        const options = {
          expires:new Date(Date.now() + 1 * 24 * 1 * 60 * 1000),
          httpOnly:true
        }

       // Return success response with the newly created user
        res.status(201).cookie("token",token,options).json({
            success: true,
            message: "User registered successfully",
            token
        });
 
    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}


exports.login = async (req,res) => {

  try {
    const {email,password} = req.body;
 
    const user = await User.findOne({email}).select("+password");
   
    if(!user){
        return res.status(404).json({
            success:false,
            message:"User not found"
        })
    }
 
    const isPasswordMatch = await user.matchPassword(password);

    if(!isPasswordMatch){
        return res.status(400).json({
            success:false,
            message:"Password is invalid"
        })
    }

    const token = await user.generateAuthToken();
    const options = {
        expires:new Date(Date.now() + 1 * 24 * 1 * 60 * 1000),
        httpOnly:true
      }

    return res.status(200).cookie("token",token,options).json({
      success:true,
      message:"login user successfully",
      user,
      token
    })

  } catch (error) {
       res.status(500).json({
        success:false,
        message:error
       })
  }
}

exports.updatedPassword = async(req,res) => {
    try {
        const user = await User.findById(req.user._id).select("+password");
        
        const {oldPassword,newPassword} = req.body;

        if(!oldPassword || !newPassword){
            return res.status(400).json({
                success:false,
                message:"Please provide old and new password."
             })
        }

        const isPasswordMatch = await user.matchPassword(oldPassword);
        
        if(!isPasswordMatch){
            res.status(400).json({
                success:false,
                message: "Incorrect Old password!"
            })
        }else{
            user.password = newPassword;
            await user.save();
           return res.status(200).json({
               success:false,
               message:"Password updated successfully"
            })
        }
    
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

exports.myProfile = async (req,res) => {
    try{
        const user = await User.findById(req.user._id);

        res.status(200).json({
            success:true,
            user
        })

    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

exports.logout = async(req,res) => {
    try{
        res.status(200).cookie("token",null,{
            expires:new Date(Date.now()),
            httpOnly:true
        })
  // In JWT, since tokens are stateless, you typically don't need to do anything here
  // Clients are responsible for discarding the token on logout
     return res.status(200).json({ message: 'Logout successful' });
    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

exports.getAllUsers = async(req,res) => {
    try {
        // req.params.id => '/users/:id',
        // req.query.username => '/users?username=${username}'
        // req.body.username
        // Make sure you have body-parser middleware installed 
        //and included in your Express application.
        const users = await User.find({
            username:{$regex:req.query.username,$options:"i"}
        })

        res.status(200).json({
            success:true,
            users
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            error:error.message
        })
    }
}


// Helper function to update user's avatar
const updateAvatar = async (user, avatar) => {
    try {
        await cloudinary.v2.uploader.destroy(user.avatar.public_id);
        const myCloud = await cloudinary.v2.uploader.upload(avatar, { folder: "avatars" });
        user.avatar.public_id = myCloud.public_id;
        user.avatar.url = myCloud.secure_url;
    } catch (error) {
        throw new Error("Error updating avatar");
    }
};


exports.updateProfile = async (req, res) => {
    try {
        const { username, email, avatar, gender, dob } = req.body;
        const user = await User.findById(req.user._id);

        if (username) user.username = username;
        
        if (email) {
            if (!isValidEmail(email)) {
                return res.status(400).json({
                    success: false,
                    message: "Invalid email format"
                });
            }
            user.email = email;
        }

        // Update user avatar if provided
        if (avatar) {
            await updateAvatar(user, avatar);
        }

        if (gender) user.gender = gender;
        if (dob) user.dob = dob;

        await user.save();

        return res.status(200).json({
            success: true,
            message: "Profile updated successfully",
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message 
        });
    }
};

