const User = require('../models/user');
const base64 = require('base-64');

function auth(req, res, next) {

  if(!req.query.key && !req.session.userId) return next();

  if(req.query.key) {
    const [ email, password ] = base64.decode(req.query.key).split(':');

    User.findOne({ email })
      .then(user => {
        if(!user || !user.validatePassword(password)) {
          return req.session.regenerate(() => {
            req.flash('danger', 'Invalid credentials.');
            res.redirect('/');
          });
        }

        res.locals.isAuthenticated = true;
        res.locals.currentUser = user;

        req.session.userId = user._id;
        req.currentUser = user;
        next();
      });

  } else if(req.session.userId) {

    User.findById(req.session.userId)
      .then(user => {
        if(!user) return req.session.regenerate(() => {
          req.flash('danger', 'You must be logged in to do that.');
          res.redirect('/');
        });

        res.locals.isAuthenticated = true;
        res.locals.currentUser = user;

        req.currentUser = user;
        next();
      });
  }
}

module.exports = auth;
