const lengthOfLIS = require('../../neetcode/1d-dynamic-programming/longest-increasing-subsequence');

describe('Main', () => {
    test('Case 1', () => {
        expect(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])).toStrictEqual(4);
    });

    test('Case 2', () => {
        expect(lengthOfLIS([0, 1, 0, 3, 2, 3])).toStrictEqual(4);
    });

    test('Case 3', () => {
        expect(lengthOfLIS([7, 7, 7, 7, 7, 7, 7])).toStrictEqual(1);
    });
});
