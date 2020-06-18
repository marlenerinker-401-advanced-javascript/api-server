'use strict';

const schema = require('./products.schema.js');
const Model = require('../mongo-interface.js');

class Product extends Model {
  constructor() {
    super(schema);
  }
}

module.exports = Product;