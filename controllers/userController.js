
const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/userModel');
const ErrorResponse = require('../utils/ErrorResponse');

exports.registerUser = asyncHandler(async(req,res)=>{
    const{name,email,password} = req.body;

    const isAvailable = await User.findOne({email});
    if(isAvailable){
        throw new ErrorResponse("User already exists",400)
    }

    const hashedPassword = await bcrypt.hash(password,10);

    const user = await User.create({
        name,
        email,
        password:hashedPassword
    });

    res.status(201).json({
        message:"User Registered!",
        user:{
            name:user.name,
            email:user.email
        }
    })
})

exports.loginUser = asyncHandler(async(req,res)=>{
    const{email,password} = req.body;
    const user = await User.findOne({email});
    if(!user){
        throw new ErrorResponse("Invalid credentials",401)
    }

    const passwordMatch = await bcrypt.compare(password,user.password);
    if(!passwordMatch){
        throw new ErrorResponse("Invalid credentials",401)
    }

    const accessToken = jwt.sign({
        user:{
            name:user.name,
            email:user.email,
            _id:user._id
        }
    },
    process.env.SECRET_ACCESS,
    {expiresIn:"1d"});

    res.status(200).json({
        message:"Logged Successfully",
        accessToken
    })
})