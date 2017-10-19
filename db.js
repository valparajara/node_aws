var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://127.0.0.1:27017/db');

mongoose.connection.once('connected', function() {
	console.log("Database connected successfully")
});