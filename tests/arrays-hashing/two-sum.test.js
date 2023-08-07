const twoSum = require('../../neetcode/arrays-hashing/two-sum');

describe('Main', () => {
    test('Case 1', () => {
        expect(twoSum([2, 7, 11, 15], 9)).toStrictEqual([0, 1]);
    });

    test('Case 2', () => {
        expect(twoSum([3, 2, 4], 6)).toStrictEqual([1, 2]);
    });

    test('Case 3', () => {
        expect(twoSum([3, 3], 6)).toStrictEqual([0, 1]);
    });
});
