const express = require('express');

// const loginValidation = require('../middlewares/validationLogin');
const userValidation = require('../middlewares/validationUser');
const userValidationById = require('../middlewares/validationUserById');
const tokenValidation = require('../middlewares/tokenValidation');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/', userValidation.validationUser, userController.postUser);

router.get('/', tokenValidation.validationToken, userController.getUser);

router.get('/:id', userValidationById.validationUserById, 
    tokenValidation.validationToken, userController.getUserById);

module.exports = router;