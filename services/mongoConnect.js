var mongoose = require('mongoose');
/*
var config = require('../config/config');

mongoose.connect(config.mongoURI, { useNewUrlParser: true });

var mongoConnection = mongoose.connection;

mongoConnection.on('error', function(){
    throw new Error("Cannot connect to the database!")
});
mongoConnection.once('open', function() {
    console.log("Connected to the database!")
});
*/
/*
mongoose.connect('mongodb://127.0.0.1:27017/bookweb', { useNewUrlParser: true });
const connection = mongoose.connection;
connection.on('error', function () {
    throw new Error("Cannot connect to the database!")

})
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})*/
//Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/bookweb';
mongoose.connect(mongoDB, { useNewUrlParser: true });

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
