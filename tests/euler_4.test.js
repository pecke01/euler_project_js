const palindromeProduct = require("../euler_4")

test('Returns 9009 from 2-digit', () => {
    expect(palindromeProduct(2)).toBe(9009)
});

test('Returns 0 from 1-digit', () => {
    expect(palindromeProduct(1)).toBe(0)
});