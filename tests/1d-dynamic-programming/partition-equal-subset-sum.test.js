const canPartition = require('../../neetcode/1d-dynamic-programming/partition-equal-subset-sum');

describe('Main', () => {
    test('Case 1', () => {
        expect(canPartition([1, 5, 11, 5])).toBeTruthy();
    });

    test('Case 2', () => {
        expect(canPartition([1, 2, 3, 5])).toBeFalsy();
    });
});
