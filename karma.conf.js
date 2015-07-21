// Karma configuration
// Generated on Mon Jul 20 2015 11:18:25 GMT+0200 (CEST)

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    //frameworks: ['systemjs', 'jasmine'],
    frameworks: ['jspm', 'jasmine'],

    jspm: {
      // Edit this to your needs
      loadFiles: [
        'test/unit/**/*.js'
      ],
      serveFiles: [
        'src/**/*.js',
        'test/unit/fixtures/**/*.json'
      ]
    },

    proxies: {
      '/src/': '/base/src/',
      '/test/': '/base/test/',
      '/jspm_packages/': '/base/jspm_packages/'
    },

    coverageReporter: {
      // configure the reporter to use isparta for JavaScript coverage
      // Only on { "karma-coverage": "douglasduteil/karma-coverage#next" }
      instrumenters: {isparta: require('isparta')},
      instrumenter: {
        '**/*.js': 'isparta'
      },
      instrumenterOptions: {
        isparta: {babel: {stage: 0}}
      },
      dir: 'test/results/unit',
      reporters: [
        //{ type: 'text-summary' },
        { type: 'teamcity', subdir: 'teamcity', file: 'teamcity.txt' },
        { type: 'html', subdir: 'html' }
      ]
    },

    // list of files / patterns to load in the browser
    files: [],


    // list of files to exclude
    exclude: [],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/**/*.js': ['coverage']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    //browsers: ['Chrome', 'Firefox'],
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  })
};
