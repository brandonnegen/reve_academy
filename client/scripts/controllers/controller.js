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

reveApp.controller("SchoolController", ["$scope", "$http", function($scope, $http){
    console.log("School Controller is working!");
}]);

reveApp.controller("AdminTeachersController", ["$scope", "$http", function($scope, $http){
    console.log("Admin-Teacher Controller is working!");
}]);

reveApp.controller("AdminClassesController", ["$scope", "$http", function($scope, $http){
    console.log("Admin-Classes Controller is working!");
}]);

reveApp.controller("AdminAssignmentsController", ["$scope", "$http", function($scope, $http){
    console.log("Admin-Assignments Controller is working!");
}]);

reveApp.controller("AdminStudentsController", ["$scope", "$http", function($scope, $http){
    console.log("Admin-Students Controller is working!");
}]);