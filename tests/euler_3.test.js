const largestPrimeFactor = require("../euler_3")

test('Returns 2 for 2', () => {
    expect(largestPrimeFactor(2)).toBe(2)
  }); 

  test('Returns 29 for 13195', () => {
    expect(largestPrimeFactor(13195)).toBe(29)
  }); 