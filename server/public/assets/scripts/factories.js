myApp.factory('PetService', ['$http', function($http) {
  var pets = {};

  var homeMessage = function() {
      console.log('Hello! Working...');
  };

  var getPets = function() {
    $http.get('/pets').then(function(res){
      pets.data = res.data;
      console.log('Here is pets object: ', pets.data);
      return pets.data;
    });
  };


  var postPets = function(data) {
    $http.post('/pets', data).then(function (res){
      console.log(res.data);
    });
  };


  var initCall = function() {
    if(pets.data === undefined) {
      $http.get('/pets').then(function(res) {
        pets.data = res.data;
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
