'use strict';

const express = require('express');

const router = express.Router();

const categories = [];

router.post('/', addCategory);
router.get('/', getAllCategories);
router.get('/:id', getCategory);
router.put('/:id', updateCategory);
router.delete('/:id', deleteCategory);

function addCategory(request, response){
  categories.push(request.body);
  response.send(request.body);
}

function getAllCategories(request, response){
  response.send(categories);
}

function getCategory(request, response){
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
}

function updateCategory(request, response){
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
}

function deleteCategory(request, response){
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
}



module.exports = router;