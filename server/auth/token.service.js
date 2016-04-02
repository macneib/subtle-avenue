'use strict';

var config = require('../config/environment');
//var redisClient = require('../config/redis').redisClient;
var tokenExpiration = config.token.expiration;
var tokenExpirationSec = tokenExpiration * 60;



var getToken = function(headers) {
  if (headers && headers.authorization) {
    var authorization = headers.authorization;
    var part = authorization.split(' ');

    if (part.length === 2) {
      var token = part[1];

      return part[1];
    }
    else {
      return null;
    }
  }
  else {
    return null;
  }
};


// Middleware for token verification
exports.verifyToken = function(req, res, next) {
  //console.log('tokenService: verifyToken');
  var token = getToken(req.headers);
  // redisClient.get(token, function (err, reply) {
  //   if (err) {
  //     console.log(err);
  //     res.sendStatus(500);
  //   }
  //   if (reply) {
  //     res.sendStatus(401);
  //   }
  //   else {
  //     next();
  //   }
  // });
};

exports.expireToken = function(headers) {
  var token = getToken(headers);
  if (token !== null) {
    redisClient.set(token, { is_expired: true });
      redisClient.expire(token, tokenExpirationSec);
  }
};

exports.tokenExpiration = tokenExpiration;