
const express = require('express');
const router = express.Router();

const isAuthenticated = require('../middleware/authMiddleware');
const {createProfile,
       getProfile,
       updateProfile,
       deleteProfile} = require('../controllers/profileController');

const validate = require('../middleware/validate');
const{createProfileSchema,updateProfileSchema} = require('../validators/profileValidator');

router.use(isAuthenticated);

router.post('/',validate(createProfileSchema),createProfile);
router.get('/',getProfile);
router.put('/',validate(updateProfileSchema),updateProfile);
router.delete('/',deleteProfile);

module.exports = router;