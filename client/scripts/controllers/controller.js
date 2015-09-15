var reveApp = angular.module('reveApp');


reveApp.controller("LoginController", ["$scope", "$http", function($scope, $http){
    console.log("Login Controller is working!");
}]);

reveApp.controller("RegisterController", ["$scope", "$http", "$route", function($scope, $http, $route){
    console.log("Register Controller is working!");
    $scope.$route = $route;
    $scope.getSchools = function(){
        console.log("Get request made");
        //GET
        $http.get('/schools/getschools').then(function(response){
            console.log(response.data);
            $scope.schoolData = response.data;

        });
    };
    $scope.getSchools();
}]);

reveApp.controller("AdminController", ["$scope", "$http", "$route", function($scope, $http, $route){
    console.log("Admin Controller is working!");
    $scope.$route = $route;

}]);

reveApp.controller("TeacherController", ["$scope", "$http", "$route", function($scope, $http, $route){
    console.log("Teacher Controller is working!");
    $scope.$route = $route;
}]);

reveApp.controller("SchoolController", ["$rootScope", "$scope", "$http", "$route", function($rootScope, $scope, $http, $route){
    console.log("School Controller is working!");

    $rootScope.$on('hideMessages', function(){
        $scope.$apply(function(){
            $scope.showSuccessMessage = false;
        });

    });

    $scope.$route = $route;
    $scope.school = {};
    $scope.getSchools = function(){
        console.log("Get request made");
        //GET
        $http.get('/schools/getschools').then(function(response){
            console.log(response.data);
            $scope.schoolData = response.data;

        });
    };

    $scope.sendSchool = function(){
            return $http.post('/schools', {name: $scope.school.name, address: $scope.school.address, district: $scope.school.district, phone: $scope.school.phone, email: $scope.school.email, contactperson: $scope.school.contactperson})
                .success(function(response) {
                    $scope.school.name = "";
                    $scope.school.address = "";
                    $scope.school.district = "";
                    $scope.school.phone = "";
                    $scope.school.email = "";
                    $scope.school.contactperson = "";
                    $scope.successMessage = "You saved it!";
                    $scope.showSuccessMessage = true;
                    $scope.getSchools();
                });

        };

    $scope.getSchools();
}]);

reveApp.controller("AdminTeachersController", ["$scope", "$http", "$route", function($scope, $http, $route){
    console.log("Admin-Teacher Controller is working!");
    $scope.$route = $route;

}]);

reveApp.controller("AdminClassesController", ["$scope", "$http", "$route", function($scope, $http, $route){
    console.log("Admin-Classes Controller is working!");
    $scope.$route = $route;
}]);

reveApp.controller("AdminAssignmentsController", ["$scope", "$http", "$route", function($scope, $http, $route){
    console.log("Admin-Assignments Controller is working!");
    $scope.$route = $route;
}]);

reveApp.controller("AdminStudentsController", ["$scope", "$http", "$route", function($scope, $http, $route){
    console.log("Admin-Students Controller is working!");
    $scope.$route = $route;
    $scope.adminStudents = {};
    $scope.getStudents = function(){
        console.log("Get request made");
        //GET
        $http.get('/admin-students/getstudents').then(function(response){
            console.log(response.data);
            $scope.adminStudentsData = response.data;

        });
    };
    $scope.getStudents();
}]);

reveApp.controller("TeacherClassesController", ["$scope", "$http", "$route", function($scope, $http, $route){
    console.log("Teacher-Classes Controller is working!");
    $scope.$route = $route;
}]);

reveApp.controller("TeacherStudentsController", ["$scope", "$http", "$route", function($scope, $http, $route){
    console.log("Teacher-Students Controller is working!");
    $scope.$route = $route;
}]);