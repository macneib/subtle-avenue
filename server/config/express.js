/**
 * Express configuration
 */

'use strict';
var config = require('./environment');

var express = require('express');
var favicon = require('serve-favicon');
var morgan = require('morgan');
var compression = require('compression');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var cookieParser = require('cookie-parser');
var errorHandler = require('errorhandler');
var path = require('path');
var helmet = require('helmet');
// removed because there was no Internet access
//var csrf = require('csurf');
var passport = require('passport');
var logger = require("./logger");

var webpack = require('webpack');
var webpackMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config.js');

module.exports = function(app) {
  var env = app.get('env');
  app.set('views', config.root + '/server/views');
  app.set('view engine', 'jade');
  app.use(compression());
  app.use(bodyParser.urlencoded({
    extended: false
  }));
  app.use(bodyParser.json());
  app.use(methodOverride());
  app.use(cookieParser());
  app.use(passport.initialize());
  app.set('appPath', path.join(config.root, 'client'));

  if ('production' === env) {
    app.use(favicon(path.join(config.root, 'client', 'favicon.ico')));
    app.use(express.static(app.get('appPath')));
    // Helmet secures Express apps by setting various HTTP headers
    app.use(helmet());
    // Stream logs through winston logger
    app.use(morgan(
      'combined', {
        stream: {
          write: function(str) {
            console.log(str);
            logger.info(str);
          }
        }
      }));
    // All errors are intercepted here and formated
    app.use(function(err, req, res, next) {
      console.error('Caught err: ', err);
      logger.error(err);
    });
  }

  if ('development' === env) {
    app.use(require('connect-livereload')());
    app.use(express.static(path.join(config.root, '.tmp')));
    app.use(express.static(app.get('appPath')));


  const compiler = webpack(config);
  const middleware = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: 'src',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  });

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
  app.get('*', function response(req, res) {
    res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'dist/index.html')));
    res.end();
  });



    // Helmet secures Express apps by setting various HTTP headers
    app.use(helmet());
    app.use(morgan('dev'));
    app.use(errorHandler()); // Error handler - has to be last
  }

  if ('test' === env) {
    app.use(express.static(path.join(config.root, '.tmp')));
    app.use(express.static(app.get('appPath')));
    app.use(errorHandler()); // Error handler - has to be last
  }

};


