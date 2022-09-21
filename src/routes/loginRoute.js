const express = require('express');

const loginValidation = require('../middlewares/validationLogin');
const loginController = require('../controllers/loginController');

const router = express.Router();

router.post('/', loginValidation.validateLogin, loginController.aproveLogin);

module.exports = router;