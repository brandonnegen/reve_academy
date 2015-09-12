var reveApp = angular.module('reveApp',['ngRoute', 'appControllers']);

var appControllers = angular.module('appControllers', []);

reveApp.config(['$routeProvider', function($routeProvider, $scope) {
    $routeProvider.
        when('/admin', {
            controller: 'AdminController',
            templateUrl: 'assets/views/admin.html'
        }).
        when('/teacher', {
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
        otherwise({redirectTo: '/login'});
}]);