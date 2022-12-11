const httpError = require('../models/http-error');

const DUMMY_PLACES = [
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
    const place = DUMMY_PLACES.find(p => {
        return p.id === placeiID;
    })

    if(!place) {
        //return res.status(404).json({message: 'Could not find the place!'});
        throw new httpError('Could not find a place for the provided ID.', 404);

    }

    res.json({place: place});
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

exports.getPlacesById = getPlacesById;
exports.getUsersById = getUsersById;