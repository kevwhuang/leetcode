const search = require('../../neetcode/binary-search/search-in-rotated-sorted-array');

describe('Main', () => {
    test('Case 1', () => {
        expect(search([4, 5, 6, 7, 0, 1, 2], 0)).toStrictEqual(4);
    });

    test('Case 2', () => {
        expect(search([4, 5, 6, 7, 0, 1, 2], 3)).toStrictEqual(-1);
    });

    test('Case 3', () => {
        expect(search([1], 0)).toStrictEqual(-1);
    });
});
