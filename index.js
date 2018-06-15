const express = require('express');
const app = express();

const { port, dbURI } = require('./config/environment');
const routes = require('./config/routes');

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

mongoose.connect(dbURI);

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);

app.use(express.static(`${__dirname}/public`));

app.use(routes);

app.listen(port, () => console.log(`Running on port ${port}`));
