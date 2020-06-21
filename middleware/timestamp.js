'use strict';

/**
 * Timestamp
 * @module timestamp
 */
/**
 * timestamp returns the date and time the request was made
 * @param {*} request 
 * @param {*} response 
 * @param {*} next 
 * @returns {variable}
 */

module.exports = (request, response, next) => {
  let t = new Date(Date.now());
  request.requestTime = t;
  next()
}

