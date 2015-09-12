var reveApp = angular.module('reveApp',['ngRoute', 'appControllers']);

var appControllers = angular.module('appControllers', []);

reveApp.config(['$routeProvider', function($routeProvider, $scope) {
    $routeProvider.
        when('/admin', {
            controller: 'AdminController',
            templateUrl: 'assets/views/admin.html'
        }).
        when('/teachers', {
            controller: 'TeacherController',
            templateUrl: 'assets/views/teachers.html'
        }).
        when('/login', {
            controller: 'LoginController',
            templateUrl: 'assets/views/login.html'
        }).
        when('/register', {
            controller: 'RegisterController',
            templateUrl: 'assets/views/register.html'
        }).
        when('/schools', {
            controller: 'SchoolController',
            templateUrl: 'assets/views/schools.html'
        }).
        when('/admin-teachers', {
            controller: 'AdminTeachersController',
            templateUrl: 'assets/views/admin-teachers.html'
        }).
        when('/admin-classes', {
            controller: 'AdminClassesController',
            templateUrl: 'assets/views/admin-classes.html'
        }).
        when('/admin-assignments', {
            controller: 'AdminAssignmentsController',
            templateUrl: 'assets/views/admin-assignments.html'
        }).
        when('/admin-students', {
            controller: 'AdminStudentsController',
            templateUrl: 'assets/views/admin-students.html'
        }).
        otherwise({redirectTo: '/login'});
}]);