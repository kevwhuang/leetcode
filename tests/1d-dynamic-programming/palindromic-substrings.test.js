const countSubstrings = require('../../neetcode/1d-dynamic-programming/palindromic-substrings');

describe('Main', () => {
    test('Case 1', () => {
        expect(countSubstrings('abc')).toStrictEqual(3);
    });
    test('Case 2', () => {
        expect(countSubstrings('aaa')).toStrictEqual(6);
    });
});
