var config = require('./environment');
var winston = require('winston');

winston.emitErrs = true;

//winston.add(require('winston-daily-rotate-file'), options)

/*
 * Winston logging and log file rotation for (production only)
 */

  var logger = new(winston.Logger)({
    transports: [
      new(winston.transports.DailyRotateFile)({
        filename: config.log.accessLog,
        dirname: config.log.path,
        timestamp: function() {
          return Date.now();
        }
      }),
      new winston.transports.File({
        filename: config.log.accessLog,
        json: false
      })
    ],
    exceptionHandlers: [
      new(winston.transports.DailyRotateFile)({
        filename: config.log.errorLog,
        dirname: config.log.path,
        timestamp: function() {
          return Date.now();
        }
      }),
      new winston.transports.File({
        filename: config.log.errorLog,
        json: false
      })
    ],
    exitOnError: false
  });
