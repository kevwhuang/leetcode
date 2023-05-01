const findMedianSortedArrays = require('../../algorithms/binary-search/median-of-two-sorted-arrays');

describe('Main', () => {
    test('Case 1', () => {
        expect(findMedianSortedArrays([1, 3], [2])).toStrictEqual(2);
    });

    test('Case 2', () => {
        expect(findMedianSortedArrays([1, 2], [3, 4])).toStrictEqual(2.5);
    });
});
