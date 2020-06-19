'use strict';

const supergoose = require('cf-supergoose');
const server = require('../lib/server.js');
const { deleteOne } = require('../lib/models/products/products.schema.js');

const mockRequest = supergoose.server(server.server);
// jest.spyOn(console, 'log').mockImplementation();

jest.spyOn(global.console, 'log');

// beforeAll(() => {
//   mockRequest.startDB();
// })

// afterAll(() => {
//   mockRequest.stopDB();
// })

// tests to create

describe('testing adding to database', () => {

  // it('should log when product added to database', () => {
  //   console.log('here in adding')
  //   let product = { name: "test", display_name: "test", description: "test" }
  //   return mockRequest.post('/api/products')
  //   .send(product)
  //   .then(results => {
  //     console.log(results.body);
  //     expect(console.log).toHaveBeenCalled();
  //     // done();
  //   })
  //   .catch(err => console.log(err));
  // });

  it('should log when category added to database', () => {
    // test goes here - response is "results was added where results is the object"
  });

  it('should log when try to add on invalid route', () => {
    // test goes here response is "Invalid Method"

  });
}); 

describe('testing getting from database', () => {

  it('should be able to get all products', () => {
    // return mockRequest.get('/api/products')
    // .then(results => {
    //   console.log(results.body);
    //   expect(console.log).toHaveBeenCalled();
    // })
  });

  it('should be able to get all categories', () => {
    // test goes here - response is an object with count and results
  });

  it('should be able to get a product by ID', () => {
    // test goes here - response is response is an object with count and results which just has the one product
  });

  it('should be able to get a category by ID', () => {
    // test goes here - response is response is an object with count and results which just has the one category
  });

  it('should log when try to get on invalid route', () => {
    // test goes here response is "Invalid Method"

  });
});

describe('testing getting from database', () => {

  it('should be able to delete a product by ID', () => {
    // test goes here - response is response is request.params.id was deleted
  });

  it('should be able to delete a category by ID', () => {
    // test goes here - response is response is request.params.id was deleted
  });

  it('should log when try to delete on invalid route', () => {
    // test goes here response is "Invalid Method"

  });
});

describe('testing updating record in database', () => {

  it('should be able to update a product by ID', () => {
    // test goes here - response is response is request.params.id was deleted
  });

  it('should be able to update a category by ID', () => {
    // test goes here - response is response is request.params.id was deleted
  });

  it('should log when try to update on invalid route', () => {
    // test goes here response is "Invalid Method"

  });
});

describe ('testing middleware', () => {

  it('timestamp should work', () => {
    // run a get and make sure the timestamp in the logger is correct

  });

  it('logger should function', () => {
    // run a get and verify the logger

  });

  it('404 error should happen correctly', () => {
    // use a route that gets a 404 error to test the message

  });

  it('500 error should happen correctly', () => {
    // do something to get a 500 error to test the message

  });
});
