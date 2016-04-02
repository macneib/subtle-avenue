/**
 * Main application file
 */

'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

import express from 'express';
import config from './config/environment';
import path from 'path';
import http from 'http';

// Setup server
var app = express();
var server = http.createServer(app);


if (config.env === 'test') {
  var io = require('socket.io')(server);
} else {
  var io = require('socket.io')(server, {
    serveClient: (config.env === 'production') ? false : true,
    path: '/socket.io-client'
  });
}

// var redis = require('socket.io-redis');
// io.adapter(redis({ host: config.redis.host, port: config.redis.port }));

require('./config/socketio')(io);
require('./config/express')(app);
require('./routes')(app);


// Start server
function startServer() {
  server.listen(config.port, config.ip, function() {
    console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
  });
}

setImmediate(startServer);

// Expose app
exports = module.exports = app;