
const multiplesOfThreeAndFive = require('../euler_1')

test('Returns sum of 0 for 0', () => {
  expect(multiplesOfThreeAndFive(0)).toBe(0)
});

test('Returns sum of 0 for 2', () => {
  expect(multiplesOfThreeAndFive(2)).toBe(0)
});

test('Returns sum of 23 for 10', () => {
    expect(multiplesOfThreeAndFive(10)).toBe(23)
  });
