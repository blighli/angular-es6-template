module.exports = function (grunt) {

  require('time-grunt')(grunt);
  require('jit-grunt')(grunt);

  /** the watch task (because of rename) can't be autoloaded **/
  grunt.loadNpmTasks('grunt-contrib-watch');
  /** same with html-build (we name it index) **/
  grunt.loadNpmTasks('grunt-html-build');

  /** load build configuration depending on project structure **/
  var userConfig = require('./build.conf.js');

  var taskConfig = {

    'babel': {
      options: {
        stage: 0,
        sourceMap: true
      },
      development: {
        src: ['src/**/*.js'],
        dest: '<%= devDir %>/',
        expand: true
      }
    },

    /** cleans up the given directories **/
    clean: {
      development: ['<%= devDir %>/*', '!<%= devDir %>/.gitkeep'],
      production: ['<%= prodDir %>/*', '!<%= prodDir %>/.gitkeep'],
      js: ['<%= devDir %>/**/*.js', '<%= devDir %>/**/*.js.map'],
      vendor: ['<%= devDir %>/vendor'],
      coverage: ['<%= e2eCoverageDir %>']
    },

    concat: {
      options: {
        //separator: ';'
      },
      dist: {
        src: [
          'jspm_packages/es6-module-loader.js',
          'jspm_packages/system.js',
          'config.js',
          '<%= devDir %>/build.js',
          'src/init.js'
        ],
        dest: '<%= prodDir %>/build-all.js'
      }
    },

    concurrent: {
      build: {
        tasks: ['shell:jspm_install', 'babel:development'],
        options: {
          logConcurrentOutput: false
        }
      },
      firstrun: {
        tasks: ['build']
      }
    },


    /** start a server with livereload **/
    connect: {
      development: {
        options: {
          protocol: 'http',
          hostname: '0.0.0.0',
          port: 3000,
          base: '<%= devDir %>',
          keepalive: false,
          debug: false,
          livereload: true,
          open: false
        }
      },
      production: {
        options: {
          protocol: 'http',
          hostname: '0.0.0.0',
          port: 3000,
          base: '<%= prodDir %>',
          keepalive: true,
          debug: false,
          livereload: false,
          open: false
        }
      }
    },

    /** copy files **/
    copy: {
      vendorJs: {
        src: [
          'config.js',
          'package.json',
          'jspm_packages/**/*',
          'vendor/**/*.js'
        ],
        dest: '<%= devDir %>/'
      },
      vendorCss: {
        src: ['<%= vendorFiles.css %>'],
        dest: '<%= devDir %>/'
      },
      assets: {
        src: [
          'assets/**/*',
          'favicon.ico'
        ],
        dest: '<%= devDir %>/',
        cwd: 'src',
        expand: true
      },
      templates: {
        src: [
          'src/app/**/*.tpl.html'
        ],
        dest: '<%= devDir %>/',
        expand: true
      },
      assetsProd: {
        src: ['**'],
        dest: '<%= prodDir %>/src/assets',
        cwd: '<%= devDir %>/src/assets',
        expand: true
      },
      jsProd: {
        cwd: '<%= devDir %>',
        src: [
          'jspm_packages/system.js',
          'jspm_packages/system.js.map',
          'jspm_packages/es6-module-loader.js',
          'jspm_packages/es6-module-loader.js.map',
          'jspm_packages/**/*.png',
          'jspm_packages/**/*.jpg',
          'jspm_packages/**/*.gif',
          'jspm_packages/**/*.woff',
          'jspm_packages/**/*.woff2',
          'jspm_packages/**/*.ttf',
          'jspm_packages/**/*.svg',
          'config.js',
          'build.js',
          'build.js.map',
          'src/main.js',
          'src/app/settings.js',
          'favicon.ico'
        ],
        dest: '<%= prodDir %>',
        expand: true
      }
    },

    /** renamed grunt-watch **/
    delta: {
      options: {
        livereload: true
      },

      gruntfile: {
        files: 'Gruntfile.js',
        tasks: [],
        options: {
          spawn: true
        }
      },

      html: {
        files: userConfig.appFiles.html,
        tasks: ['index:development']
      },

      css: {
        files: [
          'src/sass/**/*.scss'
        ],
        tasks: ['sass']
      },

      jspm: {
        files: ['package.json', 'config.js', 'src/vendor.js'],
        tasks: ['copy:vendorJs', 'shell:jspm_build_vendor']
      },

      appScripts: {
        files: userConfig.appFiles.js,
        tasks: ['newer:babel:development'],
        options: {
          event: [
            'changed',
            'added'
          ]
        }
      },

      deletedScripts: {
        files: userConfig.appFiles.js,
        tasks: [
          'clean:js',
          'clean:vendor',
          'copy:vendorJs',
          'babel:development',
          'html2js'
        ],
        options: {
          event: ['deleted']
        }
      },

      templates: {
        files: [
          'src/app/**/*.tpl.html'
        ],
        tasks: ['copy:templates'],
        options: {
          event: [
            'changed',
            'added'
          ]
        }
      }
    },

    /** render all template files into angularJs modules **/
    html2js: {
      app: {
        options: {
          base: 'src/app'
        },
        src: ['<%= appFiles.atpl %>'],
        dest: '<%= devDir %>/templates-app.js'
      }
    },

    /** create index.html while replacing placeholders **/
    index: {
      development: {
        src: 'src/index.html',
        dest: '<%= devDir %>/',
        options: {
          beautify: true,
          relative: false,
          logOptions: true,
          styles: {
            app: {
              cwd: '<%= devDir %>',
              files: ['src/assets/application.css']
            }
          },
          scripts: {
            app: {
              cwd: '<%= devDir %>',
              files: [
                'jspm_packages/system.js',
                'config.js',
                'src/init.js'
              ]
            }
          }
        }
      },
      production: {
        src: 'src/index.html',
        dest: '<%= prodDir %>/',
        options: {
          beautify: true,
          relative: false,
          logOptions: true,
          styles: {
            app: {
              cwd: '<%= prodDir %>',
              files: ['src/assets/application.css']
            }
          },
          scripts: {
            app: {
              cwd: '<%= prodDir %>',
              files: [
                'build-all.js'
              ]
            }
          }
        }
      }
    },

    manifest: {
      generate: {
        options: {
          basePath: './build/production',
          preferOnline: true,
          verbose: true,
          timestamp: true,
          hash: false
        },
        src: [
          '**/*.js',
          '**/*.css',
          '**/*.png',
          '**/*.ttf',
          '**/*.woff',
          '**/*.woff2',
          '**/*.jpg',
          '**/*.gif',
          '**/*.ico'
        ],
        dest: 'build/production/application.manifest'
      }
    },

    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        sourceMap: true,
        outputStyle: 'compressed'
      },
      dist: {
        files: {
          '<%= devDir %>/src/assets/application.css': 'src/sass/application.scss'
        }
      }
    },

    shell: {
      jspm_install: {
        command: 'node node_modules/jspm/jspm.js install'
      },

      jspm_clean: {
        command: 'mkdir jspm_packages || node node_modules/jspm/jspm.js clean'
      },

      jspm_build: {
        command: 'cd <%= devDir %> && node ../../node_modules/jspm/jspm.js bundle src/main - src/app/settings build.js --minify',
        options: {
          cwd: '<%= devDir %>'
        }
      },

      jspm_build_vendor: {
        command: 'cd <%= devDir %> && node ../../node_modules/jspm/jspm.js bundle src/vendor build-vendor.js --inject',
        options: {
          cwd: '<%= devDir %>'
        }
      },
    }

  };

  grunt.initConfig(grunt.util._.extend(taskConfig, userConfig));


  // renamed task(s).

  grunt.renameTask('watch', 'delta');
  grunt.renameTask('htmlbuild', 'index');


  // Default task(s).

  grunt.registerTask('build', ['clean', 'shell:jspm_clean', 'concurrent:build', 'copyDev', 'sass',
    'shell:jspm_build_vendor', 'index:development']);

  grunt.registerTask('compile', ['clean', 'shell:jspm_clean', 'concurrent:build', 'copyDev', 'sass',
    'shell:jspm_build', 'copyProd', 'concat', 'manifest', 'index:production']);

  grunt.registerTask('default', ['build']);

  grunt.registerTask('copyDev', ['copy:vendorJs', 'copy:templates', 'babel:development', 'copy:vendorCss', 'copy:assets']);

  grunt.registerTask('copyProd', ['copy:assetsProd', 'copy:jsProd']);

  grunt.registerTask('watch', ['build', 'connect:development', 'delta']);
};
