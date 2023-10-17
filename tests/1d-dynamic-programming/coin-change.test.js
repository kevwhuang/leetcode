const coinChange = require('../../neetcode/1d-dynamic-programming/coin-change');

describe('Main', () => {
    test('Case 1', () => {
        expect(coinChange([1, 2, 5], 11)).toStrictEqual(3);
    });

    test('Case 2', () => {
        expect(coinChange([2], 3)).toStrictEqual(-1);
    });

    test('Case 3', () => {
        expect(coinChange([1], 0)).toStrictEqual(0);
    });
});
