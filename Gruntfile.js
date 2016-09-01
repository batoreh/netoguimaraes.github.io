module.exports = function(grunt){

    grunt.initConfig({
        cssmin: {
            options: {
                shorthandCompacting: false,
            },
            target: {
                files: {
                    'css/master.min.css':['css/*.css'],
                }
            }
        },
        csscomb: {
            target: {
                files: {
                     'css/master.css': ['css/master.css'],
                }
            }
        },
        csslint:{
            target: {
                files: {
                    src: 'css/master.css',
                }
            }
        },
        less: {
          target: {
            files: {
              'css/master.css': ['less/*.less'],
            }
          }
        },
        watch: {
          scripts: {
            files: ['less/*.less'],
            tasks: ['less'],
          }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-csscomb');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
};
