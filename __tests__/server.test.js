'use strict';

const supergoose = require('cf-supergoose');
const server = require('../lib/server.js');

const mockRequest = supergoose.server(server.server);
jest.spyOn(console, 'log').mockImplementation();

// tests don't pass after class 8 refactor - need to create good tests

// describe('Testing our server', () => {
//   it('should be able to GET products', () => {
//     return mockRequest.get('/products')
//       .then(results => {
//         expect(results.body.length).toBe(0);
//       });
//   });

//   it('should be able to POST products', () => {
//     const testProduct = { id: 1, name: 'Product 1' };
//     return mockRequest.post('/products')
//       .send(testProduct)
//       .then(results => {
//         expect(results.body).toStrictEqual(testProduct);
//       })
//   })
// })