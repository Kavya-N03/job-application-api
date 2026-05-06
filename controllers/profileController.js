
const asyncHandler = require('express-async-handler');
const Profile = require('../models/profileModel');
const ErrorResponse = require('../utils/ErrorResponse');

exports.createProfile = asyncHandler(async(req,res)=>{
    const userId = req.user._id;

    const profileExists = await Profile.findOne({user:userId});
    if(profileExists){
        throw new ErrorResponse("Profile already exists", 400);
    }

    const profile = await Profile.create({
        user:userId,
        ...req.body
    });

    res.status(201).json({
        message:"Profile created successfully",
        profile
    })
})

exports.getProfile = asyncHandler(async(req,res)=>{
    const userId = req.user._id;
    const profile = await Profile.findOne({user:userId});

    if(!profile){
        throw new ErrorResponse("Profile not found",404);
    }
    res.status(200).json({
        profile
    })
});

exports.updateProfile = asyncHandler(async(req,res)=>{
    const userId = req.user._id;
    const updatedProfile = await Profile.findOneAndUpdate(
        {user:userId},
        req.body,
        {new:true,runValidators:true}
    );

    if(!updatedProfile){
        throw new ErrorResponse("Profile not found",404);
    }
    res.status(200).json({
        message:"Profile updated successfully",
        updatedProfile
    })   
})


exports.deleteProfile = asyncHandler(async(req,res)=>{
    const userId = req.user._id;
    const profile = await Profile.findOneAndDelete({
        user:userId
    });

    if(!profile){
        throw new ErrorResponse("Profile not found",404);
    }

    res.status(200).json({
        message:"Profile deleted Successfully"
    })
})