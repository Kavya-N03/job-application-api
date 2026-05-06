
const Job = require('../models/jobModel');
const Application = require('../models/applicationModel');
const asyncHandler = require('express-async-handler');
const ErrorResponse = require('../utils/ErrorResponse');

const fs = require('fs');

const deleteFile = (filePath)=>{
    if(filePath && fs.existsSync(filePath)){
        fs.unlinkSync(filePath);
    }
}

exports.applyJob = asyncHandler(async(req,res)=>{
    const userId = req.user._id;
    const {jobId} = req.params;
    const filePath = req.file?.path;

    if(!req.file){
        throw new ErrorResponse("Please upload your resume",400);
    }

    const baseUrl = `${req.protocol}://${req.get('host')}`;
    const fileUrl = `${baseUrl}/${req.file.path.replace(/\\/g,"/")}`;

    const jobAvailable = await Job.findById(jobId);
    if(!jobAvailable){
        deleteFile(filePath);
        throw new ErrorResponse("Job is not available",404);
    } 

    const appliedJob = await Application.findOne({
        user:userId,
        job:jobId
    });
    if(appliedJob){
        deleteFile(filePath);
        throw new ErrorResponse("You have already applied to this Job",400);
    }

    const application = await Application.create({
        user:userId,
        job:jobId,
        resume:fileUrl
    });
    res.status(201).json({
        message:"Job Applied Successfully",
        application
    })
});

exports.getApplications = asyncHandler(async(req,res)=>{
    const userId = req.user._id;
    const applications = await Application.find({user:userId}).
                                        populate('job').sort({createdAt:-1});
    res.status(200).json({
        count:applications.length,
        applications
    });
})


