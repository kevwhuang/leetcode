const search = require('../../neetcode/binary-search/binary-search');

describe('Main', () => {
    test('Case 1', () => {
        expect(search([-1, 0, 3, 5, 9, 12], 9)).toStrictEqual(4);
    });
    test('Case 2', () => {
        expect(search([-1, 0, 3, 5, 9, 12], 2)).toStrictEqual(-1);
    });
});
