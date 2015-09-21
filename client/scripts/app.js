var reveApp = angular.module('reveApp',['ngRoute', 'chart.js', 'appControllers']);

reveApp.directive('sameAs', function () {
    return {
        require: 'ngModel',
        link: function(scope, element, attrs, ctrl) {
            var modelToMatch = attrs.sameAs;

            scope.$watch(attrs.sameAs, function() {
                ctrl.$validate();
            })

            ctrl.$validators.match = function(modelValue, viewValue) {
                return viewValue === scope.$eval(modelToMatch);
            };
        }
    };
});

reveApp.factory('AuthService',
    ['$q', '$timeout', '$http',
        function ($q, $timeout, $http) {

            // create user variable
            var user = false;

            // return available functions for use in controllers
            return ({
                isLoggedIn: isLoggedIn,
                getUserStatus: getUserStatus,
                login: login,
                logout: logout,
                user: user
            });

            function isLoggedIn() {
                if(user) {
                    return true;
                } else {
                    return false;
                }
            }

            function getUserStatus() {
                return user;
            }

            function login(username, password) {

                // create a new instance of deferred
                var deferred = $q.defer();

                // send a post request to the server
                $http.post('/login', {username: username, password: password})
                    // handle success
                    .success(function (data, status) {
                        if(status === 200 && data.status){
                            console.log('data');
                            user = true;
                            deferred.resolve();
                        } else {
                            user = false;
                            deferred.reject();
                        }
                    })
                    // handle error
                    .error(function (data) {
                        console.log('error');
                        user = false;
                        deferred.reject();
                    });

                // return promise object
                return deferred.promise;

            }

            function logout() {

                // create a new instance of deferred
                var deferred = $q.defer();

                // send a get request to the server
                $http.get('/logout')
                    // handle success
                    .success(function (data) {
                        user = false;
                        deferred.resolve();
                    })
                    // handle error
                    .error(function (data) {
                        user = false;
                        deferred.reject();
                    });

                // return promise object
                return deferred.promise;

            }
        }]);

reveApp.run(['$rootScope', '$location', '$route', 'AuthService', function ($rootScope, $location, $route, AuthService) {
    $rootScope.$on('$routeChangeStart', function (event, next, current) {
        if (next.access.restricted === true && AuthService.isLoggedIn() === false) {
            $location.path('/login');
        }
    });
}]);
var appControllers = angular.module('appControllers', []);


reveApp.config(['$routeProvider', function($routeProvider, $scope) {
    $routeProvider.
        when('/admin', {
            controller: 'AdminController',
            access: {restricted: true},
            templateUrl: 'assets/views/admin.html',
            activetab: 'admin',
            access: {restricted: true}
        }).
        when('/teachers', {
            controller: 'TeacherController',
            templateUrl: 'assets/views/teachers.html',
            activetab: 'teachers',
            access: {restricted: true}
        }).
        when('/login', {
            controller: 'LoginController',
            templateUrl: 'assets/views/login.html',
            activetab: 'login',
            access: {restricted: false}
        }).
        when('/register', {
            controller: 'RegisterController',
            templateUrl: 'assets/views/register.html',
            activetab: 'register',
            access: {restricted: false}
        }).
        when('/schools', {
            controller: 'SchoolController',
            templateUrl: 'assets/views/schools.html',
            activetab: 'schools',
            access: {restricted: true}
        }).
        when('/admin-teachers', {
            controller: 'AdminTeachersController',
            templateUrl: 'assets/views/admin-teachers.html',
            activetab: 'admin-teachers',
            access: {restricted: true}
        }).
        when('/admin-classes', {
            controller: 'AdminClassesController',
            templateUrl: 'assets/views/admin-classes.html',
            activetab: 'admin-classes',
            access: {restricted: true}
        }).
        when('/admin-assignments', {
            controller: 'AdminAssignmentsController',
            templateUrl: 'assets/views/admin-assignments.html',
            activetab: 'admin-assignments',
            access: {restricted: true}
        }).
        when('/admin-students', {
            controller: 'AdminStudentsController',
            templateUrl: 'assets/views/admin-students.html',
            activetab: 'admin-students',
            access: {restricted: true}
        }).
        when('/teacher-classes', {
            controller: 'TeacherClassesController',
            templateUrl: 'assets/views/teacher-classes.html',
            activetab: 'teacher-classes',
            access: {restricted: true}
        }).
        when('/teacher-students', {
            controller: 'TeacherStudentsController',
            templateUrl: 'assets/views/teacher-students.html',
            activetab: 'teacher-students',
            access: {restricted: true}
        }).
        when('/unauthorized', {
            templateUrl: 'assets/views/unauthorized.html',
            access: {restricted: false}

        }).
        when('/charts', {
            controller: 'ChartsController',
            templateUrl: 'assets/views/charts.html',
            activetab: 'charts',
            access: {restricted: true}
        }).
        otherwise({redirectTo: '/login'});



}]);