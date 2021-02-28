const path = require('path');
const logger = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');
const router = require('../routes');
require('dotenv').config();
const createApp = () => {
  const app = express();
  mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, () =>
    console.log(mongoose.connection.readyState)
  );
  app.use(logger('dev'));
  app.use(cookieParser());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(methodOverride('_method'));
  app.use(express.static(path.join(__dirname, '..', '..', 'public')));

  app.set('view engine', 'ejs');
  app.set('views', path.join(__dirname, '..', '..', 'templates'));

  app.use(router);

  return app;
};
module.exports = createApp;
