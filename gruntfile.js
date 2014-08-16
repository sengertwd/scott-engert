module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // uglify: {
    //   options: {
    //     banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
    //   },
    //   build: {
    //     src: 'src/<%= pkg.name %>.js',
    //     dest: 'build/<%= pkg.name %>.min.js'
    //   }
    // },
    sass: {
      dist: {
        options: {
          style: 'expanded',
          require: 'susy'
        },
        files: {
          'css/main.css': '_scss/main.scss'
        }
      }
    },
    autoprefixer: {
      options: {
        browsers: ['last 2 version']
      },
      single_file: {
        src: 'css/main.css',
        dest: 'css/main.css'
      }
    },
    cssmin:{
      files: {
        'css/main.min.css': ['css/main.css']
      }
    },
    watch: {
      css: {
        files: '_scss/**/*.scss',
        tasks: ['sass','autoprefixer','cssmin'],
        options: {
          livereload: false
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-autoprefixer');

  // Default task(s).
  grunt.registerTask('default', ['watch']);

};