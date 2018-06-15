const User = require('../models/user');

function newRoute(req, res) {
  res.render('registrations/new');
}

function createRoute(req, res) {
  User.create(req.body)
    .then(() => res.redirect('/'))
    .catch((err) => console.log(err));
}

module.exports = {
  new: newRoute,
  create: createRoute
};
