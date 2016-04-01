// PETS SCHEMA MODEL: how information should be sent to the DB

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Pets = new Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    age: { type: Number, required: false },
    image: { type: String, required: false}
});

module.exports = mongoose.model('Animals', Pets);
