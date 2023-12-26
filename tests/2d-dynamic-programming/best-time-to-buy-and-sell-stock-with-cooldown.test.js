const maxProfit = require('../../neetcode/2d-dynamic-programming/best-time-to-buy-and-sell-stock-with-cooldown');

describe('Main', () => {
    test('Case 1', () => {
        expect(maxProfit([1, 2, 3, 0, 2])).toStrictEqual(3);
    });
    test('Case 2', () => {
        expect(maxProfit([1])).toStrictEqual(0);
    });
});
