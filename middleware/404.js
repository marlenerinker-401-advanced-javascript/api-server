'use strict';

module.exports = (request, response) => {
  if (request.baseUrl === '/favicon.ico'){
    response.sendStatus(200);
    return;
  }
  console.log('__ERROR!!__ :: '+ request.baseUrl + ' not found');
  response.status(404).send('Can\'t ' + request.method + ' ' + request.baseUrl);
}