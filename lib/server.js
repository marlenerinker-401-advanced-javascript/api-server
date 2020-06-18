'use strict';

const express = require('express');
const productsRouter = require('../routes/product.js');
const categoriesRouter = require('../routes/categories.js');
const logger = require('../middleware/logger.js');
const error404 = require('../middleware/404.js');
const error500 = require('../middleware/500.js');
const timestamp = require('../middleware/timestamp.js');
const app = express();

app.use(express.json());
app.use(timestamp);
app.use(logger);

app.get('/', (request, response) => {
  response.send('Welcome to my API. It uses these routes: <br> /products <br> /categories');
});

app.use('/products', productsRouter);
app.use('/categories', categoriesRouter);

app.use('*', error404);
app.use(error500);



module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, () => {
      console.log('server is up :::' + port);
    });
  }
}



