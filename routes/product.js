'use strict';

const express = require('express');

const router = express.Router();

const products = [];


router.post('/', addProduct);
router.get('/', getAllProducts);
router.get('/:id', getProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

function addProduct(request, response){
  products.push(request.body);
  response.send(request.body);
}

function deleteProduct(request, response){
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
  }

function getProduct(request, response){
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
}

function getAllProducts(request, response){
  response.send(products);
}

function updateProduct(request, response){
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
}


module.exports = router;
