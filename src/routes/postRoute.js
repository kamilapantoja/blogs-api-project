const express = require('express');

const postController = require('../controllers/postController');
const tokenValidation = require('../middlewares/tokenValidation');
// const validationPost = require('../middlewares/validationPost');

const router = express.Router();

router.get('/', tokenValidation.validationToken, postController.getPost);

module.exports = router;