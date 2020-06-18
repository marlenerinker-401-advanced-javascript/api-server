'use strict';

require('dotenv').config();
const server = require('./lib/server.js');
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_ATLAS_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});





server.start(PORT);