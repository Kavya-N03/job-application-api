
const Company = require('../models/companyModel');
const Job = require('../models/jobModel');
const asyncHandler = require('express-async-handler');
const ErrorResponse = require('../utils/ErrorResponse');

exports.getJobsByCompany = asyncHandler(async(req,res)=>{
    const {companyId} = req.params;
    const jobs = await Job.find({company:companyId}).populate('company','name location website');
    res.status(200).json({jobs});
});

exports.createJob = asyncHandler(async(req,res)=>{
    const{companyId} = req.params;
    const existingCompany = await Company.findById(companyId);
    if(!existingCompany){
        throw new ErrorResponse("Company not found",404)
    }

    const job = await Job.create({
        ...req.body,
        company:companyId
    });
    res.status(201).json({
        message:"Job added successfully",
        job
    })
})


exports.getAllJobs = asyncHandler(async(req,res)=>{
    const jobs = await Job.find();
    res.status(200).json({jobs});
});

exports.getJobById = asyncHandler(async(req,res)=>{
    const job = await Job.findById(req.params.id);
    if(!job){
        throw new ErrorResponse("Job not found",404);
    }
    return res.status(200).json(job)
})

exports.updateJob = asyncHandler(async(req,res)=>{
    const updatedJob = await Job.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true,runValidators:true}
    );
    if(!updatedJob){
        throw new ErrorResponse("Job not found",404);
    }

    res.status(200).json({
        message:"Job updated successfully",
        updatedJob});
})

exports.deleteJob = asyncHandler(async(req,res)=>{
    const delJob = await Job.findByIdAndDelete(req.params.id);
    if(!delJob){
        throw new ErrorResponse("Job not found",404);
    }
    res.status(200).json({
        message:"Job deleted successfully"
    })
})