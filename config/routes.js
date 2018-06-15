const router = require('express').Router();
// const auth = require('../controllers/auth');

router.get('/', (req, res) => res.render('home'));

// router.get('/register', auth.register);

module.exports = router;
