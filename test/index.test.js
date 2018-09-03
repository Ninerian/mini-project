/* eslint-env jest, es6 */

import { add, minus } from '../src/index';

describe('Test addition', () => {
  it('should add two numbers', () => {
    expect(add(1, 1)).toEqual(2);
  });

  it('should substract two numbers', () => {
    expect(minus(2, 1)).toEqual(1);
  });
});
