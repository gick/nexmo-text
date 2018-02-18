var express  = require('express');
var app      = express();
var port     = process.env.PORT || 8080;
var mongoose = require('mongoose');
var morgan       = require('morgan');
var bodyParser   = require('body-parser');

var mongoDB = 'mongodb://127.0.0.1/test';
mongoose.connect(mongoDB);
// Get Mongoose to use the global promise library
//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
require('./app/routes/route.js')(app); // load our routes and pass in our app and fully configured passport
app.listen(8080)
