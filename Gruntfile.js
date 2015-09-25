module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            client: {
                src: 'client/scripts/app.js',
                dest: 'server/public/assets/scripts/app.min.js'

            },
            controller: {
                src: 'client/scripts/controllers/controller.js',
                dest: 'server/public/assets/scripts/controllers/controller.min.js'

            }
        },
        copy: {
            html: {
                expand: true,
                cwd: "client",
                src: [
                    "views/admin.html",
                    "views/admin-assignments.html",
                    "views/admin-classes.html",
                    "views/admin-students.html",
                    "views/admin-teachers.html",
                    "views/index.html",
                    "views/login.html",
                    "views/register.html",
                    "views/schools.html",
                    "views/teachers.html",
                    "views/teacher-classes.html",
                    "views/teacher-students.html",
                    "views/unauthorized.html"
                ],
                dest: "server/public/assets/"
            },
            style: {
                expand: true,
                cwd: "client",
                src: 'styles/style.css',
                dest: 'server/public/assets/'
            },
            angular: {
                expand: true,
                cwd: 'node_modules',
                src: 'angular/angular.min.js',
                dest: 'server/public/vendors'
            },
            angularRoutes: {
                expand: true,
                cwd: 'node_modules',
                src: 'angular-route/angular-route.min.js',
                dest: 'server/public/vendors'
            },
            angularAnimate: {
                expand:true,
                cwd: 'node_modules',
                src: 'angular-animate/angular-animate.min.js',
                dest: 'server/public/vendors'
            },
            bootstrap: {
                expand: true,
                cwd: 'node_modules',
                src: 'bootstrap/dist/css/bootstrap.min.css',
                dest: 'server/public/vendors/styles/'
            },
            jquery: {
                expand: true,
                cwd: 'node_modules',
                src: 'jquery/dist/jquery.min.js',
                dest: 'server/public/vendors'
            },
            chart: {
                expand: true,
                cwd: 'node_modules',
                src: 'chart.js/Chart.min.js',
                dest: 'server/public/vendors'
            },
            angularChart: {
                expand: true,
                cwd: 'node_modules',
                src: [
                    'angular-chart.js/dist/angular-chart.min.js',
                    'angular-chart.js/dist/angular-chart.min.css',
                    'angular-chart.js/dist/angular-chart.js.tar.gz',
                    'angular-chart.js/dist/angular-chart.min.js.map',
                    'angular-chart.js/dist/angular-chart.min.css.map'
                ],
                dest: 'server/public/vendors'
            },
            cookies: {
                expand: true,
                cwd: 'node_modules',
                src: 'angular-cookies/angular-cookies.min.js',
                dest: 'server/public/vendors'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['copy', 'uglify']);
};