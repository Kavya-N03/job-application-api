
const asyncHandler = require('express-async-handler');
const Company = require('../models/companyModel');
const ErrorResponse = require('../utils/ErrorResponse');

exports.getAllCompany = asyncHandler(async(req,res)=>{
    const companies = await Company.find();
    res.status(200).json(companies);
});

exports.createCompany = asyncHandler(async(req,res)=>{
    const {name,description,location,website} = req.body;

    const existingCompany = await Company.findOne({name});
    if(existingCompany){
        throw new ErrorResponse("Company already exists",400);
    }
    const company = await Company.create({
        name,description,location,website
    });
    res.status(201).json({
        message:"Company created",
        company});
});

exports.getCompany = asyncHandler(async(req,res)=>{
    const company = await Company.findById(req.params.id);
    if(!company){
        throw new ErrorResponse("Company not found",404);
    }
    res.status(200).json(company);
})

exports.updateCompany = asyncHandler(async(req,res)=>{
    const {id} = req.params;
    const company = await Company.findById(id);

    if(!company){
        throw new ErrorResponse("Company not found",404);
    }

    Object.assign(company,req.body);

    const updatedCompany = await company.save();
    res.status(200).json({
        message:"Company data updated",
        company:updatedCompany})
});

exports.deleteCompany = asyncHandler(async(req,res)=>{
    const company = await Company.findByIdAndDelete(req.params.id);
    if(!company){
        throw new ErrorResponse("Company not found",404);
    }
    res.status(200).json({message:"Company deleted"})
})