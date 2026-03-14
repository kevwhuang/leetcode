const rob = require('../../neetcode/1d-dynamic-programming/house-robber-ii');

describe('Main', () => {
    test('Case 1', () => {
        expect(rob([2, 3, 2])).toStrictEqual(3);
    });
    test('Case 2', () => {
        expect(rob([1, 2, 3, 1])).toStrictEqual(4);
    });
    test('Case 3', () => {
        expect(rob([1, 2, 3])).toStrictEqual(3);
    });
});
