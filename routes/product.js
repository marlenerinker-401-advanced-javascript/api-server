'use strict';

const express = require('express');

const router = express.Router();

const ProductModel = require('../lib/models/products/products.collection.js');
const Product = new ProductModel();


router.post('/', addProduct);
router.get('/', getAllProducts);
router.get('/:id', getProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

function addProduct(request, response){
  Product.create(request.body)
  .then (results => response.send(results + 'was added'))
  .catch(err => response.send(err));
}

function getAllProducts(request, response){
  Product.get()
    .then(results => response.send(results))
    .catch(err => response.send(err));
}

function getProduct(request, response){
  Product.get(request.params.id)
    .then(results => response.send(results))
    .catch(err => response.send(err));
}

function updateProduct(request, response){
  Product.update(request.params.id, request.body)
  .then (results => response.send(request.params.id + ' was updated'))
  .catch(err => response.send(err));

}

function deleteProduct(request, response){
  Product.delete(request.params.id)
  .then (results => response.send(request.params.id + ' was deleted'))
  .catch(err => response.send(err));
}


module.exports = router;
