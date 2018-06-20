const User = require('../models/user');

function home(req, res) {
  User.find()
    .sort('country.rank')
    .then(users => {
      const selectionMade = !!users.length && !!users[0].country.name;
      res.render('home', { users, selectionMade });
    });
}

function admin(req, res) {
  User.find()
    .sort({ paid: -1, name: 1 })
    .then(users => res.render('admin', { users }));
}

module.exports = { home, admin };
