const twoSum = require('../../algorithms/two-pointers/two-sum-ii-input-array-is-sorted');

describe('Main', () => {
    test('Case 1', () => {
        expect(twoSum([2, 7, 11, 15], 9)).toStrictEqual([1, 2]);
    });

    test('Case 2', () => {
        expect(twoSum([2, 3, 4], 6)).toStrictEqual([1, 3]);
    });

    test('Case 3', () => {
        expect(twoSum([-1, 0], -1)).toStrictEqual([1, 2]);
    });
});
