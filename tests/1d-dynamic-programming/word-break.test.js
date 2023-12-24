const wordBreak = require('../../neetcode/1d-dynamic-programming/word-break');

describe('Main', () => {
    test('Case 1', () => {
        expect(wordBreak('leetcode', ['leet', 'code'])).toBeTruthy();
    });

    test('Case 2', () => {
        expect(wordBreak('applepenapple', ['apple', 'pen'])).toBeTruthy();
    });

    test('Case 3', () => {
        expect(wordBreak('catsandog', ['cats', 'dog', 'sand', 'and', 'cat'])).toBeFalsy();
    });
});
