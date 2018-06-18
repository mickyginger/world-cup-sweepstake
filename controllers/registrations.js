const User = require('../models/user');

function newRoute(req, res) {
  // res.render('register');
  req.flash('danger', 'Registration is now closed.');
  res.redirect('/');
}

function createRoute(req, res) {
  // User.create(req.body)
  //   .then(() => {
  //     req.flash('success', 'Thanks for registering.');
  //     res.redirect('/');
  //   })
  //   .catch(err => {
  //     req.flash('danger', 'Snap! Something wen\'t wrong. Please try again.');
  //     res.redirect('/');
  //     next(err);
  //   });
  req.flash('danger', 'Registration is now closed.');
  res.redirect('/');
}

function deleteRoute(req, res, next) {
  User.findById(req.params.id)
    .then(user => user.remove())
    .then(() => {
      req.flash('success', 'User successfully deleted.');
      res.redirect('/admin');
    })
    .catch(err => {
      req.flash('danger', 'Snap! Something wen\'t wrong. Please try again.');
      res.redirect('/admin');
      next(err);
    });
}

module.exports = {
  new: newRoute,
  create: createRoute,
  delete: deleteRoute
};
