'use strict';

module.exports = (request, response, next) => {

  console.log('__REQUEST__ :: ' + request.path + ' ' + request.method + ' ' + ' ' + request.requestTime);
  next();
}