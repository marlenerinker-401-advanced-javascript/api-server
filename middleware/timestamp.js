'use strict';

module.exports = (request, response, next) => {
  let t = new Date(Date.now());
  request.requestTime = t;
  next()
}
// used ExpressJS guide for reference
// Paul Depew helped me format the date
