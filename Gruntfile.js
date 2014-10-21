module.exports = function(grunt) {

  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Combine and minify sass
    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          // 'destination'          : 'source'
          'assets/css/main.min.css' : 'assets/scss/main.scss',
        }
      }
    },

    // Watch files for changes
    watch: {
      sass: {
        files: 'assets/scss/*.scss',
        tasks: ['sass'],
      },
    },

    // Run simple web server
    connect: {
      server: {
        options: {
          port: 9393,
          hostname: '*',
          livereload: true
        }
      }
    },

  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s)
  grunt.registerTask('default', ['sass']);

};

