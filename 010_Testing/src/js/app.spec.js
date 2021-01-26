// const multiply = require('./app');

import { multiply } from './app';

// it('Check 2 * 2 equally 4', () => {
//   expect(multiply(2, 2)).toBe(4);
// });

describe('Testing app.js', () =>{

  it('Check 2 * 2 equally 4', () => {
    expect(multiply(2, 2)).toBe(4);
  });

  it('Check 5 * 0 equally 0', () => {
    expect(multiply(5, 0)).toBe(0);
  });

  it('Check 1 * 7 equally 7', () => {
    expect(multiply(1, 7)).toBe(7);
  });

  it('Check work without params gives result 0', () => {
    expect(multiply()).toBe(0);
  });
});

