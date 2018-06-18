const User = require('../models/user');

function home(req, res) {
  User.find()
    .then(users => {
      const selectionMade = !!users.length && !!users[0].country.name;
      res.render('home', { users, selectionMade });
    });
}

function admin(req, res) {
  User.find()
    .then(users => res.render('admin', { users }));
}

module.exports = { home, admin };
