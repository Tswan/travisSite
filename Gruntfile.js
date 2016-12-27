module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';\n'
      },
      dist: {
        //src: ['src/**/*.js'],
        src: ['src/js/jquery-1.10.1.min.js', 'src/js/masonry.pkgd.js', 'src/js/masonry.js', 'src/js/script.js', 'src/js/jquery.fancybox.js'],
        dest: 'dist/js/<%= pkg.name %>.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'dist/js/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },
    copy: {
      dist: {
        files: [
          // includes files within path 
          {expand: true, flatten:true, src: ['src/css/Tuffy.ttf'], dest: 'dist/css', filter: 'isFile'},
          {expand: true, flatten:true, src: ['src/img/tabIcon.ico'], dest: 'dist/img', filter: 'isFile'}
        ],
      },
    },
    cssmin: {
      dist: {
        files: {
          'dist/css/<%= pkg.name %>.min.css': ['src/css/tsgsStyle.css','src/css/parallaxStyle.css','src/css/jquery.fancybox.css']
        }
      }
    },
    imagemin:{
      dist: {
        files: [{
        expand: true,                  // Enable dynamic expansion 
        cwd: 'src/',                   // Src matches are relative to this path 
        src: ['**/*.{png,jpg,gif}','**/**/*.{png,jpg,gif}'],   // Actual patterns to match 
        dest: 'dist/'                  // Destination path prefix 
      }]
      }
    },
    processhtml: {
      dist: {
       src: ['src/index.html'],
       dest: 'dist/index.html'
      }
    },
    htmlmin: {                                     // Task 
      dist: {                                      // Target 
        options: {                                 // Target options 
          keepClosingSlash: true,
          removeComments: true,
          collapseWhitespace: true
        },
        files: {                                   // Dictionary of files 
          'dist/index.html': '<%= processhtml.dist.dest %>',     // 'destination': 'source' 
        }
      },
    },
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js','!src/js/jquery-1.10.1.min.js','!src/js/masonry.pkgd.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
    watch: {
      css: {
        files: ['<%= cssmin.files %>'],//files: ['src/css/'],
        tasks: ['cssmin']
      },
      js: {
        files: ['<%= jshint.files %>'],
        tasks: ['jshint']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-processhtml');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  grunt.registerTask('test', ['jshint','concat','uglify']);
  grunt.registerTask('replace', ['processhtml','htmlmin']);

  grunt.registerTask('default', ['jshint', 'concat', 'cssmin', 'uglify', 'imagemin', 'processhtml', 'htmlmin', 'copy']);

};