require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const path = require('path');
const sessionConfig = require('./sessionConfig');

const cors = require('cors');
const corsConfig = require('./corsConfig');
const fileUpload = require('express-fileupload');

const config = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());
  app.use(session(sessionConfig));
  app.use(express.static(path.join(__dirname, '../public')));
  app.use(cors(corsConfig));
  app.use(fileUpload({ debug: true }));
};

module.exports = config;
