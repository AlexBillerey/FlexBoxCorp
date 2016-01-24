/**
 * Created by Billerey on 17/12/13.
 */

module.exports = function (grunt) {

    // 1. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // cssmin start
        cssmin: {
            options: {
            shorthandCompacting: false,
            roundingPrecision: -1
            },
            target: {
                files: {
                    'css/output.min.css': ['css/uncss_output2312.css']
                }
            }
        },
        uncss: {
            dist: {
                options: {
                    ignore: ['.hero_container section.openHero', '.no-touch']
                },
                files: {
                    'css/uncss_output2312.css': ['index.html']
                }
            }
        },
        browserSync: {
            bsFiles: {
                src : ['css/*.css','*.html']
            },
            options: {
                server: {
                    baseDir: "./"
                },
                browser: ["chrome","firefox","opera","iexplore","safari"]
            }
        }
        //cssminend
        // Remove unused CSS from files

        /*autoprefixer: {
            options: {
                browsers: ['last 10 version', 'ie 10', 'ie 9', 'ie 8', 'ie 7', '> 1%', 'ff > 8']
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



        cssmin: {
            minify: {
                expand: true,
                cwd: 'css/',
                src: ['*.css', '!*.min.css', '!main.css', '!main_pf.css', '!normalize.css', '!cleaned*.css'/!*, '!tidy*.css'*!/],
                dest: 'css/',
                ext: '.min.css'
            }
        },
        cssmetrics: {
            dev: {
                src: [
                    'css/tidy_flexboxcorp3.min.css'
                ]
            }
        },
        cssstats: {
            options: {
                logConsole: false,
                jsonOutput: true,
                htmlOutput: true,
                uniqueDeclarations: [
                    'font-size',
                    'float',
                    'width',
                    'height',
                    'color',
                    'background-color'
                ],
                addOrigin:          false,
                addRawCss:          false,
                addHtmlStyles:      false,
                addGraphs:          false
                /!*csslint:            {
                    clearDefaults: false,
                    ruleset:  {
                        rulesetFile: 'path/to/rulesetFile.json',
                        'zero-units': true,
                        'adjoining-classes': true
                    },
                    groupResults: true
                }*!/
            },
            files: {
                'cssStats': ['css/main.css']
            }
        },*/


        /*watch: {
            css: {
                files: ['css/!*.css'],
                tasks: ['cssstats'],
                options: {
                    spawn: false
                }
            }
        }*/
    });

    // 3. Where we tell Grunt we plan to use this plug-in.

    //grunt.loadNpmTasks('grunt-contrib-concat');

     /*grunt.loadNpmTasks('grunt-css-metrics');
    grunt.loadNpmTasks('grunt-css-statistics');
    require('load-grunt-tasks')(grunt);*/
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-uncss');
    grunt.loadNpmTasks('grunt-browser-sync');
    /* See http://blog.ponyfoo.com/2013/11/13/grunt-tips-and-tricks */

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    //grunt.registerTask('default', [ 'autoprefixer', 'concat', 'cssmin']);

};
