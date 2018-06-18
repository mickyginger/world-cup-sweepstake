const User = require('../models/user');
const Promise = require('bluebird');

function select(req, res) {

  let countries = [
    { name: 'Germany', flag: '🇩🇪', rank: 1 },
    { name: 'Brazil', flag: '🇧🇷', rank: 2 },
    { name: 'Belgium', flag: '🇧🇪', rank: 3 },
    { name: 'Portugal', flag: '🇵🇹', rank: 4 },
    { name: 'Argentina', flag: '🇦🇷', rank: 5 },
    { name: 'Switzerland', flag: '🇨🇭', rank: 6 },
    { name: 'France', flag: '🇫🇷', rank: 7 },
    { name: 'Poland', flag: '🇵🇱', rank: 8 },
    { name: 'Spain', flag: '🇪🇸', rank: 10 },
    { name: 'Peru', flag: '🇵🇪', rank: 11 },
    { name: 'Denmark', flag: '🇩🇰', rank: 12 },
    { name: 'England', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', rank: 12 },
    { name: 'Uruguay', flag: '🇺🇾', rank: 14 },
    { name: 'Mexico', flag: '🇲🇽', rank: 15 },
    { name: 'Columnbia', flag: '🇨🇴', rank: 16 },
    { name: 'Croatia', flag: '🇭🇷', rank: 20 },
    { name: 'Tunisia', flag: '🇹🇳', rank: 21 },
    { name: 'Iceland', flag: '🇮🇸', rank: 22 },
    { name: 'Costa Rica', flag: '🇨🇷', rank: 23 },
    { name: 'Sweden', flag: '🇸🇪', rank: 24 },
    { name: 'Senegal', flag: '🇸🇳', rank: 27 },
    { name: 'Serbia', flag: '🇷🇸', rank: 34 },
    { name: 'Australia', flag: '🇦🇺', rank: 36 },
    { name: 'Iran', flag: '🇮🇷', rank: 37 },
    { name: 'Morroco', flag: '🇲🇦', rank: 41 },
    { name: 'Egypt', flag: '🇪🇬', rank: 45 },
    { name: 'Nigeria', flag: '🇳🇬', rank: 48 },
    { name: 'Panama', flag: '🇵🇦', rank: 55 },
    { name: 'South Korea', flag: '🇰🇷', rank: 57 },
    { name: 'Japan', flag: '🇯🇵', rank: 61 },
    { name: 'Saudi Arabia', flag: '🇸🇦', rank: 67 },
    { name: 'Russia', flag: '🇷🇺', rank: 70 }
  ];

  function getRandomCountry() {
    const randIndex = Math.floor(Math.random() * countries.length);
    return countries.splice(randIndex, 1)[0];
  }

  User.find()
    .then(users => {

      countries = countries.slice(0, users.length);

      return Promise.all(users.map(user => {
        user.country = getRandomCountry();
        return user.save();
      }));
    })
    .then(() => res.redirect('/admin'));
}

function reset(req, res) {
  User.find()
    .then(users => {
      return Promise.all(users.map(user => {
        user.country = null;
        return user.save();
      }));
    })
    .then(() => res.redirect('/admin'));
}

function paid(req, res) {
  User.findById(req.body.userId)
    .then(user => {
      user.paid = !user.paid;
      return user.save();
    })
    .then(() => res.redirect('/admin'));
}

module.exports = {
  select,
  reset,
  paid
};
