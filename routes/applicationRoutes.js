
const express = require('express');
const router = express.Router();
const {applyJob,getApplications} = require('../controllers/applicationController');
const authMiddleware = require('../middleware/authMiddleware');
const upload = require('../middleware/upload');
const validate = require('../middleware/validate');
const{createApplicationSchema} = require('../validators/applicationValidator');

router.post('/jobs/:jobId/apply',
    authMiddleware,
    validate(createApplicationSchema),
    upload.single('resume'),
    applyJob
);

router.get('/applications',authMiddleware,getApplications);

module.exports = router;