const router = require('express').Router();
const registrations = require('../controllers/registrations');

router.get('/', (req, res) => res.render('home'));

router.route('/register')
  .get(registrations.new)
  .post(registrations.create);

module.exports = router;
