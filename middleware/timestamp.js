'use strict';

module.exports = (request, response, next) => {
  let t = new Date(Date.now());
  request.requestTime = t;
  next()
}

