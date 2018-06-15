const express = require('express');
const app = express();
const ejsLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('express-flash');
const auth = require('./lib/auth');

const { port, dbURI, secret } = require('./config/environment');
const routes = require('./config/routes');

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

mongoose.connect(dbURI);

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);
app.use(ejsLayouts);

app.use(express.static(`${__dirname}/public`));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
  secret, // a random key used to encrypt the session cookie
  resave: false,
  saveUninitialized: false
}));

app.use(flash());
app.use(auth);

app.use(routes);

app.listen(port, () => console.log(`Running on port ${port}`));
