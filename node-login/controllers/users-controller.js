const {v4: uuidv4} = require('uuid');

//You need this to check the validations results
const {validationResult} = require('express-validator');

const httpError = require('../models/http-error');

const User = require('../models/user');

const getListOfUsers = async (req, res, next) => {

    // const users = DUMMY_USERS;
    // res.json({users: users});

    let users;

    try {
        users = await User.find({}, '-password');
    } catch (err) {
        const error = new httpError('Fetching users failed, please try again!', 500);
        return next(error);
    }

    res.json({users: users.map(user => user.toObject({getters: true}))});

    
}

const createUser = async (req, res, next) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        console.log(errors);
        return next(
            new httpError('Invalid inputs for creating user', 422)
        );
    }
    //This gets the data from the body parser
    const { name, email, places, password } = req.body;

    let existingUser;

    //This finds the email from the database
    try{
        existingUser = await User.findOne({email: email})
    } catch(err) {
        const error = new httpError('Signing up has failed, please try again!', 100);
        return next(error);
    }
    

    if(existingUser) {
        const error = new httpError('User exist, please sign in instead!', 422);
        return next(error);
    }

    // const createUser = {
    //     id: uuidv4(), 
    //     name, 
    //     email, 
    //     password
    // }

    const createUser = new User({
        name, 
        email, 
        password, 
        image: 'https://en.wikipedia.org/wiki/Cactuar#/media/File:Cactuar_FFVII_Remake.png',
        places
    });

    try {
        await createUser.save();
    } catch (err) {
        const error = new httpError('Creating user failed, try again!', 500);
        return next(error)
    }

    res.status(201).json({user: createUser.toObject({getters : true})});
}

const login = async (req, res, next) => {

    // const errors = validationResult(req);
    // if(!errors.isEmpty()) {
    //     console.log(errors);
    //     throw new httpError('Email or password is empty. Please insert a value', 422);
    // }

    const {email, password} = req.body;

    let existingUser;

    //This finds the email from the database
    try{
        existingUser = await User.findOne({email: email})
    } catch(err) {
        const error = new httpError('Login has failed, please try again!', 100);
        return next(error);
    }
    
    if(!existingUser || existingUser.password !== password) {
        const error = new httpError('Invalid credentials, could not login.', 401);
        return next(error);
    }

    // const identtifyUser = DUMMY_USERS.find(u => u.email === email);

    // if(!identtifyUser || identtifyUser.password !== password) {
    //     throw new httpError('Could not identified user or wrong credentials.', 401);
    // }

    res.json({message: "logged in!"});
}

exports.getListOfUsers = getListOfUsers;
exports.createUser = createUser;
exports.loginUser = login;