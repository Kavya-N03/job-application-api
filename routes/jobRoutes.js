
const express = require('express');
const router = express.Router();

const {getJobsByCompany,
      createJob,
      getAllJobs,
      getJobById,
      updateJob,
      deleteJob} = require('../controllers/jobController');

const validate = require('../middleware/validate');
const {createJobSchema,updateJobSchema} = require('../validators/jobValidator');

//Company-based Routes
router.get('/companies/:companyId/jobs',getJobsByCompany);
router.post('/companies/:companyId/jobs',validate(createJobSchema),createJob);

//General Job Routes
router.get('/jobs',getAllJobs);
router.get('/jobs/:id',getJobById);
router.put('/jobs/:id',validate(updateJobSchema),updateJob);
router.delete('/jobs/:id',deleteJob);

module.exports = router;