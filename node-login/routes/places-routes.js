const express = require('express');
const placeControllers = require('../controllers/places-controller');
const router = express.Router();



router.get('/:pid', placeControllers.getPlacesById);

router.get('/user/:uid', placeControllers.getUsersById);

router.post('/', placeControllers.createPlace);

module.exports = router;