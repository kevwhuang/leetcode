const isMatch = require('../../neetcode/2d-dynamic-programming/regular-expression-matching');

describe('Main', () => {
    test('Case 1', () => {
        expect(isMatch('aa', 'a')).toBeFalsy();
    });

    test('Case 2', () => {
        expect(isMatch('aa', 'a*')).toBeTruthy();
    });

    test('Case 3', () => {
        expect(isMatch('ab', '.*')).toBeTruthy();
    });
});
