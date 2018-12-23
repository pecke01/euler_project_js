const evenFibonnaci = require('../euler_2')

test('Returns sum of 0 for 0', () => {
  expect(evenFibonnaci(0)).toBe(0)
});

test('Returns sum of 4 for 4', () => {
    expect(evenFibonnaci(4)).toBe(2)
  });