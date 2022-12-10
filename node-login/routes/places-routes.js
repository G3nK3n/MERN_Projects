const express = require('express');

const router = express.Router();

const DUMMY_PLACES = [
    {
        id:'p1', 
        title: 'Empire State',
        description: 'Big building', 
        creator: 'u1'
    }
]


router.get('/:pid', (req, res, next) => {
    
    //req.params gets the variable in the url, so in this case :pid
    const placeiID = req.params.pid;
    //Checks if the DUMMY_PLACES has a placeID of whatever :pid is written in the URL
    const place = DUMMY_PLACES.find(p => {
        return p.id === placeiID;
    })

    if(!place) {
        //return res.status(404).json({message: 'Could not find the place!'});
        const error = new Error('Could not find a place for the provided ID.');
        error.code = 404;
        //For Synchronus (for now...)
        throw error;
    }

    res.json({place: place});
});

router.get('/user/:uid', (req, res, next) => {
    
    //req.params gets the variable in the url, so in this case :pid
    const userID = req.params.uid;
    //Checks if the DUMMY_PLACES has a placeID of whatever :pid is written in the URL
    const user = DUMMY_PLACES.find(p => {
        return p.creator === userID;
    })

    if(!user) {
        //return res.status(404).json({message: 'Could not find the user id requested!'});
        const error = new Error('Could not find a place for the provided user ID.');
        error.code = 404;
        //For asynchronus
        return next(error);
    }

    res.json({user: user});
});

module.exports = router;