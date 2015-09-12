var reveApp = angular.module('reveApp');

reveApp.controller("LoginController", ["$scope", "$http", function($scope, $http){
    console.log("Login Controller is working!");
}]);

reveApp.controller("RegisterController", ["$scope", "$http", function($scope, $http){
    console.log("Register Controller is working!");
}]);

reveApp.controller("AdminController", ["$scope", "$http", function($scope, $http){
    console.log("Admin Controller is working!");
}]);

reveApp.controller("TeacherController", ["$scope", "$http", function($scope, $http){
    console.log("Teacher Controller is working!");
}]);