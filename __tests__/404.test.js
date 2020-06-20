'use strict';

const error = require('../middleware/404.js');

let req = { method: 'test', path: 'test'};
let req2 = { method: 'favicon', baseUrl: '/favicon.ico'}
let res = {status: jest.fn().mockImplementation(() => {
  return {send: jest.fn()}
})};
let next = jest.fn();
const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

describe('404 error test', () => {
  it('should console log stuff and move on', () => {

    error(req, res, next)
    expect(consoleSpy).toHaveBeenCalledWith('__ERROR!!__ :: '+ req.path + ' not found');
    expect(next).not.toHaveBeenCalledWith();
  })
})

// describe('404 error test', () => {

//   it('should be ok if favicon ', () => {

//     error(req2, res, next)
//     expect(consoleSpy).not.toHaveBeenCalled();
//     expect(next).not.toHaveBeenCalledWith();
//   })
// })