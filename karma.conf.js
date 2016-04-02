// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html

module.exports = function(config) {
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: '',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      // bower:js
      "client/bower_components/jquery/dist/jquery.js",
      "client/bower_components/angular/angular.js",
      "client/bower_components/angular-resource/angular-resource.js",
      "client/bower_components/angular-cookies/angular-cookies.js",
      "client/bower_components/angular-sanitize/angular-sanitize.js",
      "client/bower_components/angular-route/angular-route.js",
      "client/bower_components/angular-messages/angular-messages.js",
      "client/bower_components/angular-bootstrap/ui-bootstrap-tpls.js",
      "client/bower_components/angular-socket-io/socket.js",
      "client/bower_components/angular-validation-match/dist/angular-validation-match.min.js",
      "client/bower_components/angular-animate/angular-animate.js",
      "client/bower_components/angular-aria/angular-aria.js",
      "client/bower_components/angular-material/angular-material.js",
      "client/bower_components/angular-material-icons/angular-material-icons.min.js",
      "client/bower_components/ngstorage/ngStorage.js",
      "client/bower_components/lodash/dist/lodash.compat.js",
      "client/bower_components/quill/dist/quill.js",
      "client/bower_components/ng-quill/src/ng-quill.min.js",
      "client/bower_components/angular-timeago/src/timeAgo.js",
      "client/bower_components/webrtc-adapter/adapter.js",
      "client/bower_components/moment/moment.js",
      "client/bower_components/ngInfiniteScroll/build/ng-infinite-scroll.js",
      "client/bower_components/angular-moment/angular-moment.js",
      "client/bower_components/moment-timezone/builds/moment-timezone-with-data-2010-2020.js",
      "client/bower_components/ng-file-upload/ng-file-upload.js",
      "client/bower_components/jstzdetect/jstz.min.js",
      "client/bower_components/angular-mocks/angular-mocks.js",
      // endbower
      'node_modules/socket.io-client/socket.io.js',
      'client/app/app.js',
      'client/app/**/*.js',
      'client/components/**/*.js',
      'client/app/**/*.jade',
      'client/components/**/*.jade'
    ],

    preprocessors: {
      '**/*.jade': 'ng-jade2js',
      '**/*.html': 'html2js',
      'client/{app,components}/**/*.js': 'babel'
    },

    ngHtml2JsPreprocessor: {
      stripPrefix: 'client/'
    },

    ngJade2JsPreprocessor: {
      stripPrefix: 'client/'
    },

    babelPreprocessor: {
      options: {
        sourceMap: 'inline'
      },
      filename: function(file) {
        return file.originalPath.replace(/\.js$/, '.es5.js');
      },
      sourceFileName: function(file) {
        return file.originalPath;
      }
    },

    // list of files / patterns to exclude
    exclude: [
      "**/*.git",
      "**/angular-scenario.js"
    ],

    // web server port
    port: 8081,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    // reporter types:
    // - dots
    // - progress (default)
    // - spec (karma-spec-reporter)
    // - junit
    // - growl
    // - coverage
    reporters: ['spec'],

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};