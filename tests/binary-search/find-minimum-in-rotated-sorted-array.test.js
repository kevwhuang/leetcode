const findMin = require('../../neetcode/binary-search/find-minimum-in-rotated-sorted-array');

describe('Main', () => {
    test('Case 1', () => {
        expect(findMin([3, 4, 5, 1, 2])).toStrictEqual(1);
    });
    test('Case 2', () => {
        expect(findMin([4, 5, 6, 7, 0, 1, 2])).toStrictEqual(0);
    });
    test('Case 3', () => {
        expect(findMin([11, 13, 15, 17])).toStrictEqual(11);
    });
});
