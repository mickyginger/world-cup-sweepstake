const User = require('../models/user');

function home(req, res) {
  User.find()
    .then(users => {
      const selectionMade = !!users[0].country.name;
      res.render('home', { users, selectionMade });
    });
}

module.exports = { home };
