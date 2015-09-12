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
                    "views/index.html",
                    "views/register.html",
                    "views/users.html"
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
            bootstrap: {
                expand: true,
                cwd: 'node_modules',
                src: 'bootstrap/dist/css/bootstrap.min.css',
                dest: 'server/public/vendors/styles/'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['copy', 'uglify']);
};