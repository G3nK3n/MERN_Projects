const express = require('express');
const placeControllers = require('../controllers/places-controller');
const router = express.Router();

//Use this to use functions to check for validations
const {check} = require('express-validator');


router.get('/:pid', placeControllers.getPlacesById);

router.patch('/:pid',
[
    check('title').not().isEmpty(),
    check('description').isLength({min: 5}),
],
placeControllers.updatePlace);

router.delete('/:pid', placeControllers.deletePlace);

router.get('/user/:uid', placeControllers.getUsersById);

//This middleware has validation checks
router.post('/',
    [
    check('title').not().isEmpty(),
    check('description').isLength({min: 5}),
    ],
    placeControllers.createPlace);


module.exports = router;