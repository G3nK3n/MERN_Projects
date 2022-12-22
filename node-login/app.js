const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const placesRoutes = require('./routes/places-routes');
const usersRoutes = require('./routes/users-routes');

const HttpError = require('./models/http-error');

const app = express();

//Parse incoming request body and extract any json data in there converted to regular java
//Must be used on top before going to any other middleware
app.use(bodyParser.json());


//Removes thst status 304
app.disable('etag');

app.use('/api/places', placesRoutes);

app.use('/api/users', usersRoutes);

//This middleware will be used only if there are no other routes are called after placesRoutes above, which will give this error
app.use((req, res, next) => {
    const error = new HttpError('Could not find this route', 404);
    throw error;
});



//Treated as a special middleware function as an error function because it has 4 parameters, which grants 
//if there is an error above, which will automatically go to this function
app.use((error, req, res, next) => {
    if(res.headerSent) {
        return next(error);
    }

    res.status(error.code || 500);
    res.json({message: error.message || 'An unknown error has happened!'});
});

mongoose
    .connect('mongodb+srv://Ken:percelle@cluster0.sqby8kn.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        console.log('Connected!');
        //Using port 5000 for Node.js
        app.listen(5000);
    })
    .catch(err => {
        console.log(err);
    });

