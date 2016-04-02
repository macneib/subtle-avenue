import passport from 'passport';
import {
  Strategy as LocalStrategy
}
from 'passport-local';
import bcrypt from 'bcrypt';

function localAuthenticate(User, email, password, done) {
  User.findByEmail(email.toLowerCase())
    .then(function(user) {
      if (!user) {
        return done(null, false, {
          data: 'unregisteredEmail'
        });
      }
      bcrypt.compare(password, user.password, function(err, res) {
        if (!res) return done({
          data: 'incorrectPassword'
        });
        delete user.password;
        delete user.lastUpdateDate;
        return done(null, user);
      });
    })
    .catch(function(err) {
      return done(err);
    })
}

exports.setup = function(User, config) {
  passport.use(new LocalStrategy({
      usernameField: 'email',
      passwordField: 'password' // this is the virtual field on the model
    },
    function(email, password, done) {
      return localAuthenticate(User, email, password, done);
    }
  ));
};