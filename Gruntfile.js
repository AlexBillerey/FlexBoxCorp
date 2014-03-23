/**
 * Created by Billerey on 17/12/13.
 */

module.exports = function(grunt) {

    // 1. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        autoprefixer: {
            options: {
                browsers: ['last 10 version', 'ie 10', 'ie 9', 'ie 8', 'ie 7', '> 1%'/*, 'ff > 8'*/]
            },
            single_file: {
                src: 'css/main.css',
                dest: 'css/main_pf.css'
            }
        },
        concat: {
            dist: {
                src: [
                    'css/normalize.css',
                    'css/main_pf.css'
                ],
                dest: 'css/production.css'
            }
        },


        cssmin : {
                css:{
                src: 'css/production.css',
                dest: 'css/production.min.css'
            }

        },



        watch: {
            css: {
                files: ['css/*.css'],
                tasks: ['autoprefixer', 'concat', 'cssmin'],
                options: {
                    spawn: false
                }
            }
        }
    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    //grunt.loadNpmTasks('grunt-contrib-concat');
    require('load-grunt-tasks')(grunt); /* See http://blog.ponyfoo.com/2013/11/13/grunt-tips-and-tricks */

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['watch', 'autoprefixer', 'concat', 'cssmin']);

};
