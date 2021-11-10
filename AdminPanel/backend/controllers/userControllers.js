const asyncHandler = require ('express-async-handler');
const User = require('../models/userModel');
const generateToken = require("../utils/generateToken");


const signUpUser = asyncHandler (async (request, response) => {
    const { fullName, username, email, password} = request.body;

    const userExists = await User.findOne({username});

    if (userExists){
        response.status(400);
        throw new Error("User Already Exists");
    }

    const user = await User.create({
        fullName,
        username,
        email,
        password,
    });

    if (user) {
        response.status(201).json({
            _id:user._id,
            fullName:user.fullName,
            username: user.username,
            email: user.email,
            password: user.password,
            token: generateToken(user._id),
        })
    } else {
        response.status(400)
    throw new Error("Error Occurred")
    }
});



const loginUser = asyncHandler (async (request, response) => {
    const { username, password} = request.body;

    const user = await User.findOne({ username });

    if(user && (await user.matchPassword(password))) {
        response.json({
            _id:user._id,
            fullName:user.fullName,
            username: user.username,
            email: user.email,
            password: user.password,
            token: generateToken(user._id),
        })
    } else {
        response.status(400)
    throw new Error("Invalid Username or Password")
    }

    
});

module.exports = {signUpUser, loginUser};