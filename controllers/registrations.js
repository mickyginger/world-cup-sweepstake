const User = require('../models/user');

function newRoute(req, res) {
  res.render('register');
}

function createRoute(req, res) {
  User.create(req.body)
    .then(() => res.redirect('/'));
}

function deleteRoute(req, res) {
  User.findById(req.params.id)
    .then(user => user.remove())
    .then(() => res.redirect('/admin'));
}

module.exports = {
  new: newRoute,
  create: createRoute,
  delete: deleteRoute
};
