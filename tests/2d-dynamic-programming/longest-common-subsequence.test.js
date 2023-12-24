const longestCommonSubsequence = require('../../neetcode/2d-dynamic-programming/longest-common-subsequence');

describe('Main', () => {
    test('Case 1', () => {
        expect(longestCommonSubsequence('abcde', 'ace')).toStrictEqual(3);
    });

    test('Case 2', () => {
        expect(longestCommonSubsequence('abc', 'abc')).toStrictEqual(3);
    });

    test('Case 3', () => {
        expect(longestCommonSubsequence('abc', 'def')).toStrictEqual(0);
    });
});
