const express = require('express');
const placeControllers = require('../controllers/places-controller');
const router = express.Router();



router.get('/:pid', placeControllers.getPlacesById);

router.get('/user/:uid', placeControllers.getUsersById);

module.exports = router;