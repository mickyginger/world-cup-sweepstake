const router = require('express').Router();
const registrations = require('../controllers/registrations');
const countries = require('../controllers/countries');
const statics = require('../controllers/statics');

router.get('/', statics.home);

router.post('/selection', countries.select);

router.route('/register')
  .get(registrations.new)
  .post(registrations.create);

module.exports = router;
