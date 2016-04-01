myApp.controller('HomeController', ['$scope', 'PetService', function($scope, PetService) {
    var petService = PetService;

    petService.homeMessage();
}]);

myApp.controller('ViewPetController', ['$scope', 'PetService', function($scope, PetService) {
    var petService = PetService;

    petService.initCall();

    petService.getPets();
    console.log('* pets: ', petService.pets);

    $scope.petsArray = petService.pets;
    console.log('petsArray: ', $scope.petsArray);

}]);


myApp.controller('AddPetController', ['$scope', 'PetService', function($scope, PetService) {
    var petObject = {};
    var petService = PetService;

    $scope.typeArray = ['DOG', 'CAT', 'FISH'];

    $scope.submit = function(data) {
      petService.postPets(data);
    };
}]);
