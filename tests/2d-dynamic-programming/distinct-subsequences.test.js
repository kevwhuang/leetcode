const numDistinct = require('../../neetcode/2d-dynamic-programming/distinct-subsequences');

describe('Main', () => {
    test('Case 1', () => {
        expect(numDistinct('rabbbit', 'rabbit')).toStrictEqual(3);
    });

    test('Case 2', () => {
        expect(numDistinct('babgbag', 'bag')).toStrictEqual(5);
    });
});
