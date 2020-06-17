'use strict';

module.exports = (err, request, response) => {
  console.log('__ERROR!!__ :: ', err);
  response.status(404).send('Can\'t ' + request.method + '' + request.path);
}