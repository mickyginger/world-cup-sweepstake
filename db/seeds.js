const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { dbURI } = require('../config/environment');

const User = require('../models/user');

mongoose.connect(dbURI, (err, db) => {
  db.dropDatabase();

  User.create([{
    name: 'Nic Wilson',
    email: 'mike.hayden@ga.co',
    password: 'pass',
    passwordConfirmation: 'pass'
  }, {
    name: 'Mike Hayden',
    email: 'mike.hayden@ga.co',
    password: 'pass',
    passwordConfirmation: 'pass'
  }, {
    name: 'Gerry Mathe',
    email: 'mike.hayden@ga.co',
    password: 'pass',
    passwordConfirmation: 'pass'
  }, {
    name: 'Rob Levey',
    email: 'mike.hayden@ga.co',
    password: 'pass',
    passwordConfirmation: 'pass'
  }, {
    name: 'Mina Badawi',
    email: 'mike.hayden@ga.co',
    password: 'pass',
    passwordConfirmation: 'pass'
  }, {
    name: 'Virginia Hodge',
    email: 'mike.hayden@ga.co',
    password: 'pass',
    passwordConfirmation: 'pass'
  }, {
    name: 'JDB',
    email: 'mike.hayden@ga.co',
    password: 'pass',
    passwordConfirmation: 'pass'
  }, {
    name: 'Callum Goodwilliam',
    email: 'mike.hayden@ga.co',
    password: 'pass',
    passwordConfirmation: 'pass'
  }])
    .then(users => console.log(`${users.length} users created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());
});
