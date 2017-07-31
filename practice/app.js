var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope) {
    $scope.name = "Danny";
    $scope.occupation = "Developer";
    
    $scope.getName = function(){
        return this.name;
    }
    
    console.log($scope);
});