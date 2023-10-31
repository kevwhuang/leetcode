const longestPalindrome = require('../../neetcode/1d-dynamic-programming/longest-palindromic-substring');

describe('Main', () => {
    test('Case 1', () => {
        expect(longestPalindrome('babad')).toStrictEqual('bab');
    });

    test('Case 2', () => {
        expect(longestPalindrome('cbbd')).toStrictEqual('bb');
    });
});
