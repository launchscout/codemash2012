var fs = require('fs');

var include = {
  file: function(filename){
    return fs.readFileSync(filename, 'utf8');
  },
  code: function(filename, syntax){
    return "<pre><code class='"+ syntax +"'>"+ include.file(filename) +"</code></pre>";
  }
};

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-templater');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // change this if you want another template
  var template = "slides.eco";

  grunt.initConfig({
    template: {
      dev: {
        src: template,
        dest: 'compiled/index.html',
        variables: {
          hello: "test",
          include: include
        }
      }
    },
    sass: {
      dev: {
        src: 'stylesheets/gaslight.scss',
        dest: 'compiled/stylesheets/gaslight.css'
      }
    },
    clean: {
      folder: "compiled"
    },
    copy: {
      dist: {
        files: {
          "compiled/vendor/": "vendor/**",
          "compiled/javascripts/": "javascripts/*.js",
          "compiled/stylesheets/": "stylesheets/*.css",
          "compiled/images/": "images/**"
        }
      }
    },
    watch: {
      template: {
        files: [template, 'code/**'],
        tasks: 'template'
      },
      sass: {
        files: ['stylesheets/**'],
        tasks: 'sass'
      },
      copy: {
        files: ['javascripts/**', 'images/**', 'vendor/**'],
        tasks: 'copy'
      }
    },
    server: {
      port: 8000,
      base: 'compiled/'
    }
  });
  grunt.registerTask('compile', 'clean sass template copy');
  grunt.registerTask('default', 'compile server watch');
};
