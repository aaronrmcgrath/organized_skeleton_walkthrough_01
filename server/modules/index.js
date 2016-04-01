// Router(index.js): pulls in express and uses Router() and pulls in path and the Pets Schema model

var express = require('express');
var router = express.Router();
var path = require('path');
var Pets = require('../models/pets');


// GET call from the DB that will pull all current enteries and send them
// to the client to be put on the DOM

router.get('/pets', function(request, response){
    Pets.find({}, function(err, data){
      if(err){
        console.log(err);
      }

      response.send(data);
    });
});


// POST call to the DB from the client that saves the users pet information
//to mongodb('organized_skeleton_template01')

router.post('/pets', function(request, response){

    // logs the request to the console for verification
    console.log(request.body);

    // uses Pets Schema to create a new document for the DB
    var addedPet = new Pets({ name : request.body.name,
      type: request.body.type,
      age: request.body.age,
      image: request.body.image
    });

    // saves the Schema to the DB
    addedPet.save(function(err, data){
      if(err) {
        console.log(err);
      }

      response.send(data);
    });
});


// CATCH ALL: will forward any requests on above to index.html

router.get('/*', function(request, response){
  var file = request.params[0] || '/views/index.html';
  response.sendFile(path.join(__dirname, '../public', file));
});

module.exports = router;
