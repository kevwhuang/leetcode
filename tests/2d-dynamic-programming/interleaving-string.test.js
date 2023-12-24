const isInterleave = require('../../neetcode/2d-dynamic-programming/interleaving-string');

describe('Main', () => {
    test('Case 1', () => {
        expect(isInterleave('aabcc', 'dbbca', 'aadbbcbcac')).toBeTruthy();
    });

    test('Case 2', () => {
        expect(isInterleave('aabcc', 'dbbca', 'aadbbbaccc')).toBeFalsy();
    });

    test('Case 3', () => {
        expect(isInterleave('', '', '')).toBeTruthy();
    });
});
