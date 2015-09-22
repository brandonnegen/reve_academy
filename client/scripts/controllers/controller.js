var reveApp = angular.module('reveApp');


reveApp.controller("LoginController", ["$scope", "$http", function($scope, $http){
    console.log("Login Controller is working!");

}]);

reveApp.controller("RegisterController", ["$scope", "$http", "$route", function($scope, $http, $route){
    console.log("Register Controller is working!");
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
            $scope.showEditDeleteMessage = false;
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
            return $http.post('/schools', {
                name: $scope.school.name,
                address: $scope.school.address,
                district: $scope.school.district,
                phone: $scope.school.phone,
                email: $scope.school.email,
                contactperson: $scope.school.contactperson
            })
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

    $scope.updateSchool = function(schoolID, name, address, district, phone, email, contactperson){
        return $http.put('/schools/updateschools/' + schoolID, {
            name: name,
            address: address,
            district: district,
            phone: phone,
            email: email,
            contactperson: contactperson

        })
            .success(function() {
                $scope.editDeleteMessage = "You updated it!";
                $scope.showEditDeleteMessage = true;
                $scope.getSchools();
            });

    };


    $scope.removeSchool = function(schoolID) {
        if(confirm("Are you sure you want to delete this item?")) {
            $http.delete('/schools/' + schoolID)
                .success(function (data) {
                    $scope.schoolData = data;
                    console.log(data);
                    $scope.editDeleteMessage = "You deleted it!";
                    $scope.showEditDeleteMessage = true;
                    $scope.getSchools();
                })
                .error(function (data) {
                    console.log('Error: ' + data);
                });
        }
    };


    $scope.getSchools();

}]);

reveApp.controller("AdminTeachersController", ["$rootScope", "$scope", "$http", "$route", function($rootScope, $scope, $http, $route){
    $rootScope.$on('hideMessages', function(){
        $scope.$apply(function(){
            $scope.showSuccessMessage = false;
            $scope.showEditDeleteMessage = false;
        });

    });

    console.log("Admin-Teacher Controller is working!");
    $scope.$route = $route;
    $scope.adminTeachers = {};
    $scope.getTeachers = function(){
        console.log("Get request made");
        //GET
        $http.get('/register/getteachers').then(function(response){
            console.log(response.data);
            $scope.adminTeachersData = response.data;

        });
    };
    $scope.getSchools = function(){
        console.log("Get request made");
        //GET
        $http.get('/schools/getschools').then(function(response){
            console.log(response.data);
            $scope.schoolData = response.data;

        });
    };

    $scope.getSchools();

    $scope.sendTeacher = function(){
        return $http.post('/register/postteachers', {
            username: $scope.adminTeachers.username,
            password: $scope.adminTeachers.password,
            firstname: $scope.adminTeachers.firstname,
            lastname: $scope.adminTeachers.lastname,
            phone: $scope.adminTeachers.phone,
            email: $scope.adminTeachers.email,
            school: $scope.adminTeachers.school

        })
            .success(function(response) {
                $scope.adminTeachers.firstname = "";
                $scope.adminTeachers.lastname = "";
                $scope.adminTeachers.phone = "";
                $scope.adminTeachers.email = "";
                $scope.adminTeachers.school = "";
                $scope.adminTeachers.username = "";
                $scope.adminTeachers.password = "";
                $scope.adminTeachers.password = "";
                $scope.adminTeachers.passwordRepeated = "";
                $scope.successMessage = "You saved it!";
                $scope.showSuccessMessage = true;
                $scope.getTeachers();
            });

    };


    $scope.updateTeacher = function(teacherID, firstname, lastname, phone, email, school ){
        return $http.put('/register/updateteachers/' + teacherID, {
            firstname: firstname,
            lastname: lastname,
            phone: phone,
            email: email,
            school: school


        })
            .success(function() {
                $scope.editDeleteMessage = "You updated it!";
                $scope.showEditDeleteMessage = true;
                $scope.getTeachers();
            });

    };

    $scope.removeTeacher = function(teacherID) {
        if(confirm("Are you sure you want to delete this item?")) {
            $http.delete('/register/' + teacherID)
                .success(function (data) {
                    $scope.adminTeachersData = data;
                    console.log(data);
                    $scope.editDeleteMessage = "You deleted it!";
                    $scope.showEditDeleteMessage = true;
                    $scope.getTeachers();
                })
                .error(function (data) {
                    console.log('Error: ' + data);
                });
        }
    };

    $scope.getTeachers();


    }]);

    reveApp.controller("AdminClassesController", ["$rootScope", "$scope", "$http", "$route", function($rootScope, $scope, $http, $route){

        $rootScope.$on('hideMessages', function(){
            $scope.$apply(function(){
                $scope.showSuccessMessage = false;
                $scope.showEditDeleteMessage = false;
            });

        });

        console.log("Admin-Classes Controller is working!");
        $scope.$route = $route;
        $scope.adminClasses = {};
        $scope.getClasses = function(){
            console.log("Get request made");
            //GET
            $http.get('/admin-classes/getclasses').then(function(response){
                console.log(response.data);
                $scope.adminClassesData = response.data;
        });
    };
        $scope.sendClass = function(){
            return $http.post('/admin-classes', {
                name: $scope.adminClasses.name,
                startdate: $scope.adminClasses.startdate,
                enddate: $scope.adminClasses.enddate
            })
                .success(function() {
                    $scope.adminClasses.name = "";
                    $scope.adminClasses.startdate = "";
                    $scope.adminClasses.enddate= "";
                    $scope.successMessage = "You saved it!";
                    $scope.showSuccessMessage = true;
                    $scope.getClasses();
                });

        };


        $scope.updateClass = function(classID, name, startdate, enddate){
            return $http.put('/admin-classes/updateclasses' + classID, {
                name: name,
                startdate: startdate,
                enddate: enddate

            })
                .success(function() {
                    $scope.editDeleteMessage = "You updated it!";
                    $scope.showEditDeleteMessage = true;
                    $scope.getClasses();
                });

        };

        $scope.removeClass = function(classID) {
            if(confirm("Are you sure you want to delete this item?")) {
                $http.delete('/admin-classes/' + classID)
                    .success(function (data) {
                        $scope.adminClassesData = data;
                        console.log(data);
                        $scope.editDeleteMessage = "You deleted it!";
                        $scope.showeditDeleteMessage = true;
                        $scope.getClasses();
                    })
                    .error(function (data) {
                        console.log('Error: ' + data);
                    });
            }
        };

    $scope.getClasses();
}]);

reveApp.controller("AdminAssignmentsController", ["$rootScope", "$scope", "$http", "$route", function($rootScope, $scope, $http, $route){

    $rootScope.$on('hideMessages', function(){
        $scope.$apply(function(){
            $scope.showSuccessMessage = false;
            $scope.showEditDeleteMessage = false;
        });

    });

    console.log("Admin-Assignments Controller is working!");
    $scope.$route = $route;
    $scope.adminAssignments = {};
    $scope.getAssignments = function(){
        console.log("Get request made");
        //GET
        $http.get('/admin-assignments/getassignments').then(function(response){
            console.log(response.data);
            $scope.adminAssignmentsData = response.data;

        });
    };

    $scope.sendAssignment = function(){
        return $http.post('/admin-assignments/postassignments', {
            name: $scope.adminAssignments.name
        })
            .success(function(response) {
                $scope.adminAssignments.name = "";
                $scope.successMessage = "You saved it!";
                $scope.showSuccessMessage = true;
                $scope.getAssignments();
            });

    };

    $scope.updateAssignment = function(assignmentID, name){
        return $http.put('/admin-assignments/updateassignments/' + assignmentID, {
            name: name
        })
            .success(function() {
                $scope.editDeleteMessage = "You updated it!";
                $scope.showEditDeleteMessage = true;
                $scope.getAssignments();
            });

    };

    $scope.removeAssignment = function(assignmentID) {
        if(confirm("Are you sure you want to delete this item?")) {
            $http.delete('/admin-assignments/' + assignmentID)
                .success(function (data) {
                    $scope.adminAssignmentsData = data;
                    console.log(data);
                    $scope.editDeleteMessage = "You deleted it!";
                    $scope.showEditDeleteMessage = true;
                    $scope.getAssignments();
                })
                .error(function (data) {
                    console.log('Error: ' + data);
                });
        }
    };

    $scope.getAssignments();
}]);

reveApp.controller("AdminStudentsController", ["$rootScope", "$scope", "$http", "$route", function($rootScope, $scope, $http, $route){

    $rootScope.$on('hideMessages', function(){
        $scope.$apply(function(){
            $scope.showSuccessMessage = false;
            $scope.showEditDeleteMessage = false;
        });

    });
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

    $scope.updateStudent = function(studentID, studentid, firstname, lastname, gradelevel, age, gender, race, ethnicity, softskillspre, softskillspost, classcompletion){
        return $http.put('/admin-students/updatestudents/' + studentID, {
            studentid: studentid,
            firstname: firstname,
            lastname: lastname,
            gradelevel: gradelevel,
            age: age,
            gender: gender,
            race: race,
            ethnicity: ethnicity,
            softskillspre: softskillspre,
            softskillspost: softskillspost,
            classcompletion: classcompletion

        })
            .success(function() {
                $scope.editDeleteMessage = "You updated it!";
                $scope.showEditDeleteMessage = true;
                $scope.getStudents();
            });

    };

    $scope.sendStudent = function(){
        return $http.post('/admin-students/poststudents', {
            studentid: $scope.adminStudents.studentid,
            firstname: $scope.adminStudents.firstname,
            lastname: $scope.adminStudents.lastname,
            gradelevel: $scope.adminStudents.gradelevel,
            age: $scope.adminStudents.age,
            gender: $scope.adminStudents.gender,
            race: $scope.adminStudents.race,
            ethnicity: $scope.adminStudents.ethnicity,
            softskillspre: $scope.adminStudents.softskillspre,
            softskillspost: $scope.adminStudents.softskillspost,
            classcompletion: $scope.adminStudents.classcompletion
        })
            .success(function(response) {
                $scope.adminStudents.studentid = "";
                $scope.adminStudents.firstname = "";
                $scope.adminStudents.lastname = "";
                $scope.adminStudents.gradelevel = "";
                $scope.adminStudents.age = "";
                $scope.adminStudents.gender = "";
                $scope.adminStudents.race = "";
                $scope.adminStudents.ethnicity = "";
                $scope.adminStudents.softskillspre = "";
                $scope.adminStudents.softskillspost = "";
                $scope.adminStudents.classcompletion = "";
                $scope.successMessage = "You saved it!";
                $scope.showSuccessMessage = true;
                $scope.getStudents();
            });

    };

    $scope.removeStudent = function(studentID) {
        if(confirm("Are you sure you want to delete this item?")) {
            $http.delete('/admin-students/' + studentID)
                .success(function (data) {
                    $scope.adminStudentsData = data;
                    console.log(data);
                    $scope.editDeleteMessage = "You deleted it!";
                    $scope.showEditDeleteMessage = true;
                    $scope.getStudents();
                })
                .error(function (data) {
                    console.log('Error: ' + data);
                });
        }
    };

    $scope.getStudents();
}]);

reveApp.controller("TeacherClassesController", ["$rootScope", "$scope", "$http", "$route", function($rootScope, $scope, $http, $route){

    $rootScope.$on('hideMessages', function(){
        $scope.$apply(function(){
            $scope.showSuccessMessage = false;
            $scope.showEditDeleteMessage = false;
        });

    });

    console.log("Teacher-Classes Controller is working!");
    $scope.$route = $route;
    $scope.adminClasses = [];
    $scope.adminAssignments = [];
    $scope.adminStudents = [];
    $scope.studentGrades = [];
    $scope.getClasses = function(){
        console.log("Get request made");
        //GET
        $http.get('/admin-classes/getclasses').then(function(response){
            console.log(response.data);
            $scope.adminClassesData = response.data;
        });
    };
    $scope.getAssignments = function(){
        console.log("Get request made");
        //GET
        $http.get('/admin-assignments/getassignments').then(function(response){
            console.log(response.data);
            $scope.adminAssignmentsData = response.data;

        });
    };
    $scope.getStudents = function(){
        console.log("Get request made");
        //GET
        $http.get('/admin-students/getstudents').then(function(response){
            $scope.adminStudentsData = response.data;
        });
    };

    $scope.sendGrade = function(studentID, ssPreGrade, ssPostGrade, preAssessmentGrade, storyBoardGrade, websiteGrade, postAssessmentGrade){
        console.log("pre grade: " + $scope.adminStudents.softskillspregrade);
        console.log("ID", studentID);
        console.log("scope", $scope);

        $http.put('admin-students/gradestudents', {
                data: $scope.adminStudentsData
            }
        //{
        //    id: studentID,
        //    softskillspregrade: $scope.adminStudents.softskillspregrade,
        //    softskillspostgrade: $scope.adminStudents.softskillspostgrade,
        //    preassessmentgrade: $scope.adminStudents.preassessmentgrade,
        //    storyboardgrade: $scope.adminStudents.storyboardgrade,
        //    websitegrade: $scope.adminStudents.websitegrade,
        //    postassessmentgrade: $scope.adminStudents.postassessmentgrade
        //}
        ).success(function() {
                $scope.getStudents();
            });

    };

    $scope.sendClass = function(){
        return $http.post('/admin-classes', {
            name: $scope.adminClasses.name,
            startdate: $scope.adminClasses.startdate,
            enddate: $scope.adminClasses.enddate
        })
            .success(function(response) {
                $scope.adminClasses.name = "";
                $scope.adminClasses.startdate = "";
                $scope.adminClasses.enddate= "";
                $scope.successMessage = "You saved it!";
                $scope.showSuccessMessage = true;
                $scope.getClasses();
            });

    };

    $scope.updateClass = function(classID, name, startdate, enddate){
        return $http.put('/admin-classes/updateclasses' + classID, {
            name: name,
            startdate: startdate,
            enddate: enddate

        })
            .success(function() {
                $scope.editDeleteMessage = "You updated it!";
                $scope.showEditDeleteMessage = true;
                $scope.getClasses();
            });

    };

    $scope.removeClass = function(classID) {
        if(confirm("Are you sure you want to delete this item?")) {
            $http.delete('/admin-classes/' + classID)
                .success(function (data) {
                    $scope.adminClassesData = data;
                    console.log(data);
                    $scope.editDeleteMessage = "You deleted it!";
                    $scope.showeditDeleteMessage = true;
                    $scope.getClasses();
                })
                .error(function (data) {
                    console.log('Error: ' + data);
                });
        }
    };

    $scope.getClasses();
    $scope.getAssignments();
    $scope.getStudents();
}]);

reveApp.controller("TeacherStudentsController", ["$rootScope", "$scope", "$http", "$route", function($rootScope, $scope, $http, $route){

    $rootScope.$on('hideMessages', function(){
        $scope.$apply(function(){
            $scope.showSuccessMessage = false;
            $scope.showEditDeleteMessage = false;
        });

    });

    console.log("Teacher-Students Controller is working!");
    $scope.$route = $route;
    $scope.adminStudents = [];
    $scope.adminClasses = {};
    $scope.getStudents = function(){
        console.log("Get request made");
        //GET
        $http.get('/admin-students/getstudents').then(function(response){
            console.log("Get students request", response.data);
            $scope.adminStudentsData = response.data;
        });
    };
    $scope.getClasses = function(){
        console.log("Get request made");
        //GET
        $http.get('/admin-classes/getclasses').then(function(response){
            console.log("get classes request", response.data);
            $scope.adminClassesData = response.data;
        });
    };
    $scope.getClasses();

    $scope.sendStudent = function(){
        console.log("What's going on?", $scope.adminStudents.studentid);
        return $http.post('/admin-students/poststudents', {
            studentid: $scope.adminStudents.studentid,
            firstname: $scope.adminStudents.firstname,
            lastname: $scope.adminStudents.lastname,
            gradelevel: $scope.adminStudents.gradelevel,
            age: $scope.adminStudents.age,
            gender: $scope.adminStudents.gender,
            race: $scope.adminStudents.race,
            ethnicity: $scope.adminStudents.ethnicity,
            softskillspre: $scope.adminStudents.softskillspre,
            softskillspost: $scope.adminStudents.softskillspost,
            classcompletion: $scope.adminStudents.classcompletion
        })
            .success(function(response) {
                $scope.adminStudents.studentid = "";
                $scope.adminStudents.firstname = "";
                $scope.adminStudents.lastname = "";
                $scope.adminStudents.gradelevel = "";
                $scope.adminStudents.age = "";
                $scope.adminStudents.gender = "";
                $scope.adminStudents.race = "";
                $scope.adminStudents.ethnicity = "";
                $scope.adminStudents.softskillspre = "";
                $scope.adminStudents.softskillspost = "";
                $scope.adminStudents.classcompletion = "";
                $scope.successMessage = "You saved it!";
                $scope.showSuccessMessage = true;
                $scope.getStudents();
            });

    };

    $scope.updateStudent = function(studentID, studentid, firstname, lastname, gradelevel, age, gender, race, ethnicity, softskillspre, softskillspost, classcompletion){
        return $http.put('/admin-students/updatestudents/' + studentID, {
            studentid: studentid,
            firstname: firstname,
            lastname: lastname,
            gradelevel: gradelevel,
            age: age,
            gender: gender,
            race: race,
            ethnicity: ethnicity,
            softskillspre: softskillspre,
            softskillspost: softskillspost,
            classcompletion: classcompletion

        })
            .success(function() {
                $scope.editMessage = "You updated it!";
                $scope.showEditMessage = true;
                $scope.getStudents();
            });

    };


    $scope.removeStudent = function(studentID) {
        if(confirm("Are you sure you want to delete this item?")) {
            $http.delete('/admin-students/' + studentID)
                .success(function (data) {
                    $scope.adminStudentsData = data;
                    console.log(data);
                    $scope.deleteMessage = "You deleted it!";
                    $scope.showDeleteMessage = true;
                    $scope.getStudents();
                })
                .error(function (data) {
                    console.log('Error: ' + data);
                });
        }
    };

    $scope.getStudents();
}]);

reveApp.controller("ChartsController", ["$rootScope", "$scope", "$http", "$route", function($rootScope, $scope, $http, $route){
    $scope.$route = $route;
    $scope.adminStudents = [];
    $scope.preAssessmentGradeOne = 0;
    $scope.preAssessmentGradeTwo = 0;
    $scope.preAssessmentGradeThree = 0;
    $scope.preAssessmentGradeFour = 0;
    $scope.ssPreGradeOne = 0;
    $scope.ssPreGradeTwo = 0;
    $scope.ssPreGradeThree = 0;
    $scope.ssPreGradeFour = 0;
    $scope.storyBoardGradeOne = 0;
    $scope.storyBoardGradeTwo = 0;
    $scope.storyBoardGradeThree = 0;
    $scope.storyBoardGradeFour = 0;
    $scope.websiteGradeOne = 0;
    $scope.websiteGradeTwo = 0;
    $scope.websiteGradeThree = 0;
    $scope.websiteGradeFour = 0;
    $scope.ssPostGradeOne = 0;
    $scope.ssPostGradeTwo = 0;
    $scope.ssPostGradeThree = 0;
    $scope.ssPostGradeFour = 0;
    $scope.postAssessmentGradeOne = 0;
    $scope.postAssessmentGradeTwo = 0;
    $scope.postAssessmentGradeThree = 0;
    $scope.postAssessmentGradeFour = 0;
    $scope.americanIndianOrAlaskaNative = 0;
    $scope.asian = 0;
    $scope.blackOrAfricanAmerican = 0;
    $scope.nativeHawaiianOrOtherPacificIslander = 0;
    $scope.white = 0;
    $scope.twoOrMoreRaces = 0;
    $scope.hispanic = 0;
    $scope.notHispanicOrLatino = 0;
    $scope.americanIndianOrAlaskaNativeCompletion = 0;
    $scope.asianCompletion = 0;
    $scope.blackOrAfricanAmericanCompletion = 0;
    $scope.nativeHawaiianOrOtherPacificIslanderCompletion = 0;
    $scope.whiteCompletion = 0;
    $scope.twoOrMoreRacesCompletion = 0;
    $scope.hispanicCompletion = 0;
    $http.get('/admin-students/getstudents').then(function(response){
        $scope.adminStudentsData = response.data;
        for(var i = 0; i < response.data.length; i++){
            //Pre-Assessment Grade Data
            if(response.data[i].preassessmentgrade == 1){
                $scope.preAssessmentGradeOne++;
            } else if(response.data[i].preassessmentgrade == 2){
                $scope.preAssessmentGradeTwo++;
            } else if(response.data[i].preassessmentgrade ==3){
                $scope.preAssessmentGradeThree++;
            } else if(response.data[i].preassessmentgrade ==4){
                $scope.preAssessmentGradeFour++;
            }
            $scope.preAssessmentGrades = [
                $scope.preAssessmentGradeOne,
                $scope.preAssessmentGradeTwo,
                $scope.preAssessmentGradeThree,
                $scope.preAssessmentGradeFour
            ];
            $scope.preAssessmentGradeLabels = [
                "One",
                "Two",
                "Three",
                "Four"
            ];
            //Soft Skills Pre-Assessment Grade Data
            if(response.data[i].softskillspregrade == 1){
                $scope.ssPreGradeOne++;
            } else if(response.data[i].softskillspregrade == 2){
                $scope.ssPreGradeTwo++;
            } else if(response.data[i].softskillspregrade ==3){
                $scope.ssPreGradeThree++;
            } else if(response.data[i].softskillspregrade == 4){
                $scope.ssPreGradeFour++;
            }
            $scope.ssPreAssessmentGrades = [
                $scope.ssPreGradeOne,
                $scope.ssPreGradeTwo,
                $scope.ssPreGradeThree,
                $scope.ssPreGradeFour
            ];
            $scope.ssPreAssessmentGradeLabels = [
                "One",
                "Two",
                "Three",
                "Four"
            ];
            //Story Board Grade Data
            if(response.data[i].storyboardgrade == 1){
                $scope.storyBoardGradeOne++;
            } else if(response.data[i].storyboardgrade == 2){
                $scope.storyBoardGradeTwo++;
            } else if(response.data[i].storyboardgrade == 3){
                $scope.storyBoardGradeThree++;
            } else if(response.data[i].storyboardgrade == 4){
                $scope.storyBoardGradeFour++;
            }
            $scope.storyBoardGrades = [
                $scope.storyBoardGradeOne,
                $scope.storyBoardGradeTwo,
                $scope.storyBoardGradeThree,
                $scope.storyBoardGradeFour
            ];
            $scope.storyBoardGradeLabels = [
                "One",
                "Two",
                "Three",
                "Four"
            ];
            //Website Grade Data
            if(response.data[i].websitegrade == 1){
                $scope.websiteGradeOne++;
            } else if(response.data[i].websitegrade == 2){
                $scope.websiteGradeTwo++;
            } else if(response.data[i].websitegrade == 3){
                $scope.websiteGradeThree++;
            } else if(response.data[i].websitegrade == 4){
                $scope.websiteGradeFour++;
            }
            $scope.websiteGrades = [
                $scope.websiteGradeOne,
                $scope.websiteGradeTwo,
                $scope.websiteGradeThree,
                $scope.websiteGradeFour
            ];
            $scope.websiteGradeLabels = [
                "One",
                "Two",
                "Three",
                "Four"
            ];
            //Soft Skills Post Assessment Grade Data
            if(response.data[i].softskillspostgrade == 1){
                $scope.ssPostGradeOne++;
            } else if(response.data[i].softskillspostgrade == 2){
                $scope.ssPostGradeTwo++;
            } else if(response.data[i].softskillspostgrade == 3){
                $scope.ssPostGradeThree++;
            } else if(response.data[i].softskillspostgrade == 4){
                $scope.ssPostGradeFour++;
            }
            $scope.ssPostGrades = [
                $scope.ssPostGradeOne,
                $scope.ssPostGradeTwo,
                $scope.ssPostGradeThree,
                $scope.ssPostGradeFour
            ];
            $scope.ssPostGradeLabels = [
                "One",
                "Two",
                "Three",
                "Four"
            ];
            //Post-Assessment Grade Data
            if(response.data[i].postassessmentgrade == 1){
                $scope.postAssessmentGradeOne++;
            } else if(response.data[i].postassessmentgrade == 2){
                $scope.postAssessmentGradeTwo++;
            } else if(response.data[i].postassessmentgrade == 3){
                $scope.postAssessmentGradeThree++;
            } else if(response.data[i].postassessmentgrade == 4){
                $scope.postAssessmentGradeFour++;
            }
            $scope.postAssessmentGrades = [
                $scope.postAssessmentGradeOne,
                $scope.postAssessmentGradeTwo,
                $scope.postAssessmentGradeThree,
                $scope.postAssessmentGradeFour
            ];
            $scope.postAssessmentGradeLabels = [
                "One",
                "Two",
                "Three",
                "Four"
            ];
            //Demographic Chart Data And Demographic Course Completion Data
            if(response.data[i].race == "American Indian or Alaska Native"){
                $scope.americanIndianOrAlaskaNative++;
            } else if(response.data[i].race == "Asian"){
                $scope.asian++;
            } else if(response.data[i].race == "Black or African American"){
                $scope.blackOrAfricanAmerican++;
            } else if(response.data[i].race == "Native Hawaiian or Other Pacific Islander"){
                $scope.nativeHawaiianOrOtherPacificIslander++;
            } else if(response.data[i].race == "White"){
                $scope.white++;
            } else if(response.data[i].race == "Two or more races"){
                $scope.twoOrMoreRaces++;
            } else if(response.data[i].ethnicity == "Hispanic"){
                $scope.hispanic++;
            } else if(response.data[i].ethnicity == "Not Hispanic or Latino"){
                $scope.notHispanicOrLatino++;
            }
            if(response.data[i].race == "American Indian or Alaska Native" && response.data[i].classcompletion == "Yes"){
                $scope.americanIndianOrAlaskaNativeCompletion++;
            } else if(response.data[i].race == "Asian" && response.data[i].classcompletion == "Yes"){
                $scope.asianCompletion++;
            } else if(response.data[i].race == "Black or African American" && response.data[i].classcompletion == "Yes"){
                $scope.blackOrAfricanAmericanCompletion++;
            } else if(response.data[i].race == "Native Hawaiian or Other Pacific Islander" && response.data[i].classcompletion == "Yes"){
                $scope.nativeHawaiianOrOtherPacificIslanderCompletion++;
            } else if(response.data[i].race == "White" && response.data[i].classcompletion == "Yes"){
                $scope.whiteCompletion++;
            } else if(response.data[i].race == "Two or more races" && response.data[i].classcompletion == "Yes"){
                $scope.twoOrMoreRacesCompletion++;
            } else if(response.data[i].ethnicity == "Hispanic" && response.data[i].classcompletion == "Yes"){
                $scope.hispanicCompletion++;
            } else if(response.data[i].ethnicity == "Not Hispanic or Latino" && response.data[i].classcompletion == "Yes"){
                $scope.notHispanicOrLatinoCompletion++;
            }
            $scope.demographicData = [
                [
                    $scope.americanIndianOrAlaskaNative,
                    $scope.asian,
                    $scope.blackOrAfricanAmerican,
                    $scope.nativeHawaiianOrOtherPacificIslander,
                    $scope.white,
                    $scope.twoOrMoreRaces,
                    $scope.hispanic
                ],
                [
                    $scope.americanIndianOrAlaskaNativeCompletion,
                    $scope.asianCompletion,
                    $scope.blackOrAfricanAmericanCompletion,
                    $scope.nativeHawaiianOrOtherPacificIslanderCompletion,
                    $scope.whiteCompletion,
                    $scope.twoOrMoreRacesCompletion,
                    $scope.hispanicCompletion
                ]

            ];
            $scope.series = [
                "Series A",
                "Series B"
            ];
            console.log("Demo Data", $scope.demographicData);
            $scope.demographicDataLabels = [
                "American Indian or Alaska Native",
                "Asian",
                "Black or African American",
                "Native Hawaiian or Other Pacific Islander",
                "White",
                "Two or more races",
                "Hispanic"
            ];
        }
    });
}]);