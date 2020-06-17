'use strict';

const express = require('express');
const logger = require('../middleware/logger.js');
const error404 = require('../middleware/404.js');
const error500 = require('../middleware/500.js');
const timestamp = require('../middleware/timestamp.js');
const app = express();

app.use(express.json());
app.use(timestamp);
app.use(logger);

const categories = [];
const products = [];

//product routes

app.post('/products', (request, response) => {
  products.push(request.body);
  response.send(request.body);
});

app.get('/products', (request, response) => {
  response.send(products);
})

app.get('/products/:id', (request, response) => {
  const reqID = parseInt(request.params.id);
  let found = false;
  products.forEach(obj => {
    if (obj.id === reqID) {
      found = true;
      response.send(obj);
    }
  })
  if (found === false){
  response.send('Couldn\'t find that product');
  }
})

app.put('/products/:id', (request, response) => {
  const reqID = parseInt(request.params.id);
  let found = false;
  products.forEach((obj, i) => {
    if (obj.id === reqID) {
      found = true;
      products[i] = request.body;
      response.send('Updated product ' + reqID);
    }
  })
  if (found === false){
  response.send('Couldn\'t find that product');
  }
})

app.delete('/products/:id', (request, response) => {
  const reqID = parseInt(request.params.id);
  let found = false;
  products.forEach((obj, i) => {
    if (obj.id === reqID) {
      products.splice(i, 1);
      found = true;
      response.send('Deleted product ' + reqID);
    }
  })
  if (found === false){
  response.send('Couldn\'t find that product');
  }
})

//categories routes

app.post('/categories', (request, response) => {
  categories.push(request.body);
  response.send(request.body);
});

app.get('/categories', (request, response) => {
  response.send(categories);
})

app.get('/categories/:id', (request, response) => {
  const reqID = parseInt(request.params.id);
  let found = false;
  categories.forEach(obj => {
    if (obj.id === reqID) {
      found = true;
      response.send(obj);
    }
  })
  if (found === false){
  response.send('Couldn\'t find that category');
  }
})

app.put('/categories/:id', (request, response) => {
  const reqID = parseInt(request.params.id);
  let found = false;
  categories.forEach((obj, i) => {
    if (obj.id === reqID) {
      found = true;
      categories[i] = request.body;
      response.send('Updated category ' + reqID);
    }
  })
  if (found === false){
  response.send('Couldn\'t find that category');
  }
})

app.delete('/categories/:id', (request, response) => {
  const reqID = parseInt(request.params.id);
  let found = false;
  categories.forEach((obj, i) => {
    if (obj.id === reqID) {
      categories.splice(i, 1);
      found = true;
      response.send('Deleted category ' + reqID);
    }
  })
  if (found === false){
  response.send('Couldn\'t find that category');
  }
})

app.use(error404);
app.use(error500);



module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, () => {
      console.log('server is up :::' + port);
    });
  }
}



