
const {getAllCompany,
      createCompany,
      getCompany,
      updateCompany,
      deleteCompany} =require('../controllers/companyController');
    
const express = require('express');
const router = express.Router();
const validate = require('../middleware/validate');
const{createCompanySchema,updateCompanySchema} = require('../validators/companyValidator');

router.get('/',getAllCompany);
router.post('/',validate(createCompanySchema),createCompany);
router.get('/:id',getCompany);
router.put('/:id',validate(updateCompanySchema),updateCompany);
router.delete('/:id',deleteCompany);

module.exports = router;

