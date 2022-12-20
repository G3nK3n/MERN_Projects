const {v4: uuidv4} = require('uuid');

//You need this to check the validations results
const {validationResult} = require('express-validator');

const httpError = require('../models/http-error');

let DUMMY_USERS = [
    {
        id:'u1', 
        name: 'Ken',
        email: 'wtv@wtv.com', 
        password: 'abc'
    }
]

const getListOfUsers = (req, res, next) => {

    const users = DUMMY_USERS;
    res.json({users: users});
}

const createUser = (req, res, next) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        console.log(errors);
        throw new httpError('Invalid inputs for creating user', 422);
    }
    //This gets the data from the body parser
    const { name, email, password } = req.body;

    const hasUser = DUMMY_USERS.find(u => u.email === email);
    if(hasUser) {
        throw new httpError('User already exists with email', 422);
    }

    const createUser = {
        id: uuidv4(), 
        name, 
        email, 
        password
    }

    DUMMY_USERS.push(createUser);

    res.status(201).json({user: createUser});
}

const login = (req, res, next) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        console.log(errors);
        throw new httpError('Email or password is empty. Please insert a value', 422);
    }

    const {email, password} = req.body;

    const identtifyUser = DUMMY_USERS.find(u => u.email === email);

    if(!identtifyUser || identtifyUser.password !== password) {
        throw new httpError('Could not identified user or wrong credentials.', 401);
    }

    res.json({message: "logged in!"});
}

exports.getListOfUsers = getListOfUsers;
exports.createUser = createUser;
exports.loginUser = login;