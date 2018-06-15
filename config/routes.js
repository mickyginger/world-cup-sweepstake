const router = require('express').Router();
const registrations = require('../controllers/registrations');

router.route('/register')
  .get(registrations.new)
  .post(registrations.create);

module.exports = router;
