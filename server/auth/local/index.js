'use strict';

import express from 'express';
import passport from 'passport';
import {signToken} from '../auth.service';

var router = express.Router();

router.post('/', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    var error = err || info;
    if (error) {
      return res.status(401).send(error);
    }
    if (!user) {
      return res.sendStatus(404);
    }
    var token = signToken(user.id, user.role);
    res.status(200).send({
      token: token
    });
  })(req, res, next)
});

router.post('/logout', function(req, res) {
  if (!req.headers) {
    console.info('logout');
    res.sendStatus(401)
  }
  res.sendStatus(204);
});

export default router;