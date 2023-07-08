const lengthOfLongestSubstring = require('../../algorithms/sliding-window/longest-substring-without-repeating-characters');

describe('Main', () => {
    test('Case 1', () => {
        expect(lengthOfLongestSubstring('abcabcbb')).toStrictEqual(3);
    });

    test('Case 2', () => {
        expect(lengthOfLongestSubstring('bbbbb')).toStrictEqual(1);
    });

    test('Case 3', () => {
        expect(lengthOfLongestSubstring('pwwkew')).toStrictEqual(3);
    });
});
