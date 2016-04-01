var express = require('express');
var router = express.Router();
var path = require('path');
var Pets = require('../models/pets');

router.get('/pets', function(request, response){
    Pets.find({}, function(err, data){
      if(err){
        console.log(err);
      }

      response.send(data);
    });
});

router.post('/pets', function(request, response){
    console.log(request.body);

    var addedPet = new Pets({ name : request.body.name,
      type: request.body.type,
      age: request.body.age,
      image: request.body.image
    });

    addedPet.save(function(err, data){
      if(err) {
        console.log(err);
      }

      response.send(data);
    });
});

router.get('/*', function(request, response){
  var file = request.params[0] || '/views/index.html';
  response.sendFile(path.join(__dirname, '../public', file));
});

module.exports = router;
