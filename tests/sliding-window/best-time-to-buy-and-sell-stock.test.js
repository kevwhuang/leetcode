const maxProfit = require('../../neetcode/sliding-window/best-time-to-buy-and-sell-stock');

describe('Main', () => {
    test('Case 1', () => {
        expect(maxProfit([7, 1, 5, 3, 6, 4])).toStrictEqual(5);
    });

    test('Case 2', () => {
        expect(maxProfit([7, 6, 4, 3, 1])).toStrictEqual(0);
    });
});
