'use strict';

module.exports = (err, request, response) => {
  console.log('__ERROR!!__ :: ', err);
  response.status(500).send('Server error');
}