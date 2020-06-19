'use strict';

const timestamp = require('../middleware/timestamp.js');

let req = { method: 'test', path: 'test', requestTime: 'test'};
let res = {};
let next = jest.fn();
// const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

describe('Middleware test', () => {
  it('should check the timestamp', () => {

    timestamp(req, res, next);
    expect(req.requestTime).toEqual(new Date(Date.now()));
    expect(next).toHaveBeenCalledWith();
  })
})