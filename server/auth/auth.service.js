'use strict';

import passport from 'passport';
import config from '../config/environment';
import jwt from 'jsonwebtoken';
import expressJwt from 'express-jwt';
import compose from 'composable-middleware';
import User from '../api/user/user.model';
import tokenService from './token.service';

var validateJwt = expressJwt({
  secret: config.secrets.session
});

/**
 * Attaches the user object to the request if authenticated
 * Otherwise returns 403
 */
export function isAuthenticated() {
  return compose()
    // Validate jwt
    .use(function(req, res, next) {
      // allow access_token to be passed through query parameter as well
      if (req.query && req.query.hasOwnProperty('access_token')) {
        req.headers.authorization = 'Bearer ' + req.query.access_token;
      }
      validateJwt(req, res, next);
    })
    // Attach user to request
    .use(function(req, res, next) {
      if (!req.user.id) {
        return res.sendStatus(401);
      }
      // Attach user to request
      User.find(req.user.id)
        .then(function(result) {
          req.user = result;
          next();
        })
        .catch(function(err) {
          next(err);
          res.sendStatus(401);
        })

    });
}

/**
 * Checks if the user role meets the minimum requirements of the route
 */
export function hasRole(roleRequired) {
  if (!roleRequired) throw new Error('Required role needs to be set');

  return compose()
    .use(isAuthenticated())
    .use(function meetsRequirements(req, res, next) {
      if (config.userRoles.indexOf(req.user.role) >= config.userRoles.indexOf(roleRequired)) {
        next();
      } else {
        res.send(403).send('Forbidden');
      }
    });
}

/**
 * Return jwt token signed by the app secret
 */
export function signToken(id) {
  return jwt.sign({
    id: id
  }, config.secrets.session, {
    expiresIn: tokenService.tokenExpiration,
    issuer: 'https://www.spoxr.com'
  });
}

/**
 * Set token cookie directly for oAuth strategies
 */
export function setTokenCookie(req, res) {
  if (!req.user) return res.json(404, {
    message: 'Something went wrong, please try again.'
  });
  var token = signToken(req.user._id, req.user.role);
  res.cookie('token', JSON.stringify(token));
  res.redirect('/');
}