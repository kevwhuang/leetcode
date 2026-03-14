const change = require('../../neetcode/2d-dynamic-programming/coin-change-ii');

describe('Main', () => {
    test('Case 1', () => {
        expect(change(5, [1, 2, 5])).toStrictEqual(4);
    });
    test('Case 2', () => {
        expect(change(3, [2])).toStrictEqual(0);
    });
    test('Case 3', () => {
        expect(change(10, [10])).toStrictEqual(1);
    });
});
