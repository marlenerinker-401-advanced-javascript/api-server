'use strict';

module.exports = (request, response) => {
  console.log('__ERROR!!__ :: '+ request.path + ' not found');
  response.status(404).send('Can\'t ' + request.method + ' ' + request.path);
}