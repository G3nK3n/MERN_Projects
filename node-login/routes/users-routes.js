const express = require('express');
const usersController = require('../controllers/users-controller');
const router = express.Router();

//Use this to use functions to check for validations
const {check} = require('express-validator');

router.get('/', usersController.getListOfUsers);

router.post('/signup', 
[ 
    check('name').not().isEmpty(),
    check('email').normalizeEmail().isEmail(),
    check('password').not().isEmpty(),
],
usersController.createUser);

//Dont really need to use these checks for login since it will return an error if it does not find an existing email and password
router.post('/login', 
[
    check('email').not().isEmpty(),
    check('password').not().isEmpty(),
],
usersController.loginUser);

module.exports = router;