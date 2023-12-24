const maxCoins = require('../../neetcode/2d-dynamic-programming/burst-balloons');

describe('Main', () => {
    test('Case 1', () => {
        expect(maxCoins([3, 1, 5, 8])).toStrictEqual(167);
    });

    test('Case 2', () => {
        expect(maxCoins([1, 5])).toStrictEqual(10);
    });
});
