'use strict';

module.exports = (request, response) => {
  console.log('__ERROR!!__ :: 500');
  response.status(500).send('Server error');
}