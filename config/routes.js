const router = require('express').Router();
const registrations = require('../controllers/registrations');
const countries = require('../controllers/countries');
const statics = require('../controllers/statics');
const secureRoute = require('../lib/secureRoute');

router.get('/', statics.home);
router.get('/admin', secureRoute, statics.admin);
router.get('/logout', (req, res) => req.session.regenerate(() => res.redirect('/')));

router.post('/select', secureRoute, countries.select);
router.post('/reset', secureRoute, countries.reset);
router.post('/paid', secureRoute, countries.paid);

router.route('/register')
  .get(registrations.new)
  .post(registrations.create);

router.post('/registrations/:id/delete', registrations.delete);

module.exports = router;
