//const uuid = require('uuid/dist/esm-node/v4');
const {v4: uuidv4} = require('uuid');

//You need this to check the validations results
const {validationResult} = require('express-validator');

const httpError = require('../models/http-error');

const Place = require('../models/place');

let DUMMY_PLACES = [
    {
        id:'p1', 
        title: 'Empire State',
        description: 'Big building', 
        creator: 'u1'
    }
]

const getPlacesById = (req, res, next) => {
    
    //req.params gets the variable in the url, so in this case :pid
    const placeiID = req.params.pid;
    //Checks if the DUMMY_PLACES has a placeID of whatever :pid is written in the URL
    //Replaced find with filter because there could be multiples places with the same creator
    const places = DUMMY_PLACES.filter(p => {
        return p.id === placeiID;
    })

    //Added place.length just in case if the length of place is 0
    if(!places || places.length===0) {
        //return res.status(404).json({message: 'Could not find the place!'});
        throw new httpError('Could not find a places for the provided ID.', 404);

    }

    res.json({places: places});
}

const updatePlacesById = (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        console.log(errors);
        throw new httpError('Invalid inputs for updating', 422);
    }
    
    
    const { title, description } = req.body;
    
    const placeiID = req.params.pid;
    //Checks if the DUMMY_PLACES has a placeID of whatever :pid is written in the URL
    //Make sure you do this shortcut version, which will makle the PATCH work?    
    const place = {...DUMMY_PLACES.find(p => p.id===placeiID)};
    //const placeIndex = {...DUMMY_PLACES.find(p => {p.id === placeiID})};
    
    const placeIndex = DUMMY_PLACES.findIndex(p => p.id === placeiID);

    

    place.title = title;
    place.description = description;

    DUMMY_PLACES[placeIndex] = place;

    res.status(200).json({place: place})

    // if(!place) {
    //     //return res.status(404).json({message: 'Could not find the place!'});
    //     throw new httpError('Could not find a place for the provided ID.', 404);

    // }

    
}

const getUsersById = (req, res, next) => {
    
    //req.params gets the variable in the url, so in this case :pid
    const userID = req.params.uid;
    //Checks if the DUMMY_PLACES has a placeID of whatever :pid is written in the URL
    const user = DUMMY_PLACES.find(p => {
        return p.creator === userID;
    })

    if(!user) {
        //return res.status(404).json({message: 'Could not find the user id requested!'});
        return next(new httpError('Could not find a place for the provided user ID.', 404));
    }

    res.json({user: user});
}

const createPlace = async (req, res, next) => {
    
    //Then you need to do this in order to see if there are any validation errors according to your request in the routes
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        console.log(errors);
        throw new httpError('Invalid inputs', 422);
    }
    
     //This gets the data from the body parser
    const { title, description, creator } = req.body;

    //This is for Mongoose Database
    const createPlace = new Place({
        title, 
        description, 
        creator
    });
    /* Replacing this with Mongoose Database above
    const createPlace = {
        id: uuidv4(),
        title, 
        description, 
        creator
    };
    */

    try {
        await createPlace.save();
    } catch (err) {
        const error = new httpError('Creating place failed, try again!', 500);
        return next(error)
    }
    //Saves this document by inserting a new document into the database
     
    //DUMMY_PLACES.push(createPlace);

    res.status(201).json({place: createPlace});
}

const deletePlace = (req, res, next) => {
    const placeID = req.params.pid;

    //Verify first to see if ID exist
    if(!DUMMY_PLACES.find(p => p.id === placeID)) {
        throw new httpError('Could not find a place ID from url', 404);
    }
    
    DUMMY_PLACES = DUMMY_PLACES.filter(p => p.id != placeID)
    /*
    const place = {...DUMMY_PLACES.find(p => p.id===placeiID)};
    const placeIndex = DUMMY_PLACES.findIndex(p => p.id === placeiID);

    DUMMY_PLACES.pop(place[placeIndex]);
    */
    res.status(200).json({place: "Succesfully deleted!"})
}

exports.getPlacesById = getPlacesById;
exports.getUsersById = getUsersById;
exports.createPlace = createPlace;
exports.updatePlace = updatePlacesById;
exports.deletePlace = deletePlace;