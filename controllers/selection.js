const countries = [
  '🇦🇺',
  '🇮🇷',
  '🇯🇵',
  '🇸🇦',
  '🇰🇷',
  '🇪🇬',
  '🇲🇦',
  '🇳🇬',
  '🇸🇳',
  '🇹🇳',
  '🇨🇷',
  '🇲🇽',
  '🇵🇦',
  '🇦🇷',
  '🇧🇷',
  '🇨🇴',
  '🇵🇪',
  '🇺🇾',
  '🇧🇪',
  '🇭🇷',
  '🇩🇰',
  '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
  '🇫🇷',
  '🇩🇪',
  '🇮🇸',
  '🇵🇱',
  '🇵🇹',
  '🇷🇺',
  '🇷🇸',
  '🇪🇸',
  '🇸🇪',
  '🇨🇭'
];

const users = [{
  name: 'Nic Wilson'
}, {
  name: 'Mike Hayden'
}, {
  name: 'Gerry Mathe'
}, {
  name: 'Rob Levey'
}, {
  name: 'Mina Badawi'
}, {
  name: 'Virginia Hodge'
}, {
  name: 'JDB'
}, {
  name: 'Callum Goodwilliam'
}];

function getRandomCountry() {
  const randIndex = Math.floor(Math.random() * countries.length);
  return countries.splice(randIndex, 1)[0];
}

function makeSelection(req, res) {
  users.forEach(user => {
    user.country = getRandomCountry();
  });

  console.log(users);

  res.redirect('/');
}

module.exports = {
  makeSelection
};
