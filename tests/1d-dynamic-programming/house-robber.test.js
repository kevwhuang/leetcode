const rob = require('../../neetcode/1d-dynamic-programming/house-robber');

describe('Main', () => {
    test('Case 1', () => {
        expect(rob([1, 2, 3, 1])).toStrictEqual(4);
    });
    test('Case 2', () => {
        expect(rob([2, 7, 9, 3, 1])).toStrictEqual(12);
    });
});
