// CONTROLLERS

// HomeController will send the test message from Factory
myApp.controller('HomeController', ['$scope', 'PetService', function($scope, PetService) {
    var petService = PetService;

    petService.homeMessage();
}]);


// ViewPetController will call functions: initCall & getPets to pull information
// into the view partial for the user to see all entries from DB
myApp.controller('ViewPetController', ['$scope', 'PetService', function($scope, PetService) {
    var petService = PetService;

    petService.initCall();

    petService.getPets();
    console.log('* pets: ', petService.pets);

    $scope.petsArray = petService.pets;
    console.log('petsArray: ', $scope.petsArray);

}]);


// AddPetController will pull all submitted html items from pet-form on the add.html
// and place it into the petObject to send as a post to the DB
myApp.controller('AddPetController', ['$scope', 'PetService', function($scope, PetService) {
    var petObject = {};
    var petService = PetService;

    $scope.typeArray = ['DOG', 'CAT', 'FISH'];

    $scope.submit = function(data) {
      petService.postPets(data);
    };
}]);
