const User = require('../models/user');
const Promise = require('bluebird');

function select(req, res) {

  const countries = [
    { name: 'Australia', flag: '🇦🇺', rank: 36 },
    { name: 'Iran', flag: '🇮🇷', rank: 37 },
    { name: 'Japan', flag: '🇯🇵', rank: 61 },
    { name: 'Saudi Arabia', flag: '🇸🇦', rank: 67 },
    { name: 'South Korea', flag: '🇰🇷', rank: 57 },
    { name: 'Egypt', flag: '🇪🇬', rank: 45 },
    { name: 'Morroco', flag: '🇲🇦', rank: 41 },
    { name: 'Nigeria', flag: '🇳🇬', rank: 48 },
    { name: 'Senegal', flag: '🇸🇳', rank: 27 },
    { name: 'Tunisia', flag: '🇹🇳', rank: 21 },
    { name: 'Costa Rica', flag: '🇨🇷', rank: 23 },
    { name: 'Mexico', flag: '🇲🇽', rank: 15 },
    { name: 'Panama', flag: '🇵🇦', rank: 55 },
    { name: 'Argentina', flag: '🇦🇷', rank: 5 },
    { name: 'Brazil', flag: '🇧🇷', rank: 2 },
    { name: 'Columnbia', flag: '🇨🇴', rank: 16 },
    { name: 'Peru', flag: '🇵🇪', rank: 11 },
    { name: 'Uruguay', flag: '🇺🇾', rank: 14 },
    { name: 'Belgium', flag: '🇧🇪', rank: 3 },
    { name: 'Croatia', flag: '🇭🇷', rank: 20 },
    { name: 'Denmark', flag: '🇩🇰', rank: 12 },
    { name: 'England', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', rank: 12 },
    { name: 'France', flag: '🇫🇷', rank: 7 },
    { name: 'Germany', flag: '🇩🇪', rank: 1 },
    { name: 'Iceland', flag: '🇮🇸', rank: 22 },
    { name: 'Poland', flag: '🇵🇱', rank: 8 },
    { name: 'Portugal', flag: '🇵🇹', rank: 4 },
    { name: 'Russia', flag: '🇷🇺', rank: 70 },
    { name: 'Serbia', flag: '🇷🇸', rank: 34 },
    { name: 'Spain', flag: '🇪🇸', rank: 10 },
    { name: 'Sweden', flag: '🇸🇪', rank: 24 },
    { name: 'Switzerland', flag: '🇨🇭', rank: 6 }
  ];

  function getRandomCountry() {
    const randIndex = Math.floor(Math.random() * countries.length);
    return countries.splice(randIndex, 1)[0];
  }

  User.find()
    .then(users => {
      return Promise.all(users.map(user => {
        user.country = getRandomCountry();
        return user.save();
      }));
    })
    .then(() => res.redirect('/'));
}

module.exports = {
  select
};
