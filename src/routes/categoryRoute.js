const express = require('express');

const categoryController = require('../controllers/categoryController');
const tokenValidation = require('../middlewares/tokenValidation');

const router = express.Router();

router.post('/', tokenValidation.validationToken, categoryController.postCategory);
router.get('/', tokenValidation.validationToken, categoryController.getCategory);

module.exports = router;