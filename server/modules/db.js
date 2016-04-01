var mongoose = require('mongoose');

var mongoURI = 'mongodb://localhost/organized_skeleton_template01'
var MongoDB = mongoose.connect(mongoURI).connection;

MongoDB.on('error', function(err){
    console.log('Mongo Connection Error: ', err);
});

MongoDB.on('open', function(){
    console.log('Mongo Conection Open');
});

module.exports = MongoDB;
