// PETSERVICE FACTORY to be used for controllers

myApp.factory('PetService', ['$http', function($http) {

  // variable that creates empty pets object
  var pets = {};

  // test message
  var homeMessage = function() {
      console.log('Hello! Working...');
  };


  // getPets function that will call all the current pet entries from the DB
  // through the server - initiates the get to the server
  var getPets = function() {
    $http.get('/pets').then(function(response){
      pets.data = response.data;
      console.log('Here is pets object: ', pets.data);
      return pets.data;
    });
  };


  // postPets function will call a post to the DB through the server -
  // initiates the post to the server
  var postPets = function(data) {
    $http.post('/pets', data).then(function (response){
      console.log(response.data);
    });
  };


  // initCall function will initate a get from the server to pull all
  // entries from the DB
  var initCall = function() {
    if(pets.data === undefined) {
      $http.get('/pets').then(function(response) {
        pets.data = response.data;
      });
    }
  };


  return {
    homeMessage: homeMessage,
    postPets: postPets,
    getPets: getPets,
    pets: pets,
    initCall: initCall
  }

}]);
