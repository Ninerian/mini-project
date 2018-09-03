/* eslint-env jest, es6 */

import add from '../src/index';

describe('Test addition', () => {
  it('should add two numbers', () => {
    expect(add(1, 1)).toEqual(2);
  });
});
