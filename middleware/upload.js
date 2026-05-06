const multer = require('multer');
const path = require('path');

let storage;

if (process.env.NODE_ENV === 'production') {

    const { CloudinaryStorage } = require('multer-storage-cloudinary');
    const cloudinary = require('../config/cloudinary');

    storage = new CloudinaryStorage({
    cloudinary,
    params: async (req, file) => ({
        folder: 'jobportal-resumes',
        resource_type: 'auto',
        public_id: Date.now() + '-' + file.originalname
    })
    });

} else {

    storage = multer.diskStorage({

        destination: (req, file, cb) => {
            cb(null, 'uploads/');
        },

        filename: (req, file, cb) => {
            cb(
                null,
                Date.now() + path.extname(file.originalname)
            );
        }

    });

}

const fileFilter = (req, file, cb) => {

    const allowedFileTypes = /pdf/;

    const mimeType = allowedFileTypes.test(file.mimetype);

    const extname = allowedFileTypes.test(
        path.extname(file.originalname).toLowerCase()
    );

    if (mimeType && extname) {
        return cb(null, true);
    }

    cb(new Error('Only PDF files are allowed'));

};

const upload = multer({
    storage,
    fileFilter
});

module.exports = upload;