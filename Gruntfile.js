module.exports = function(grunt) {

    // Load tasks
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');


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
        files: 'assets/scss/**/*.scss',
        tasks: ['sass'],
      },
    },

  });

  grunt.registerTask('default', ['sass']);
};

