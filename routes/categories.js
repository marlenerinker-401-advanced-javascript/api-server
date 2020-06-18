'use strict';

const express = require('express');

const router = express.Router();

const CategoryModel = require('../lib/models/categories/categories.collection.js');
const Category = new CategoryModel();

router.post('/', addCategory);
router.get('/', getAllCategories);
router.get('/:id', getCategory);
router.put('/:id', updateCategory);
router.delete('/:id', deleteCategory);

function addCategory(request, response){
  Category.create(request.body)
  .then (results => response.send(results + 'was added'))
  .catch(err => response.send(err));
}

function getAllCategories(request, response){
  Category.get()
    .then(results => response.send(results))
    .catch(err => response.send(err));
}

function getCategory(request, response){
  Category.get(request.params.id)
    .then(results => response.send(results))
    .catch(err => response.send(err));
}

function updateCategory(request, response){
  Category.update(request.params.id, request.body)
  .then (results => response.send(request.params.id + ' was updated'))
  .catch(err => response.send(err));

}

function deleteCategory(request, response){
  Category.delete(request.params.id)
  .then (results => response.send(request.params.id + ' was deleted'))
  .catch(err => response.send(err));
}

//Paul Depew pointed me in the right direction with some of these. He helped me make my code cleaner than it was.



module.exports = router;