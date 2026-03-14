const maxSubArray = require('../../neetcode/greedy/maximum-subarray');

describe('Main', () => {
    test('Case 1', () => {
        expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toStrictEqual(6);
    });
    test('Case 2', () => {
        expect(maxSubArray([1])).toStrictEqual(1);
    });
    test('Case 3', () => {
        expect(maxSubArray([5, 4, -1, 7, 8])).toStrictEqual(23);
    });
});
