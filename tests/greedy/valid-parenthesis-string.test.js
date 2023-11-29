const checkValidString = require('../../neetcode/greedy/valid-parenthesis-string');

describe('Main', () => {
    test('Case 1', () => {
        expect(checkValidString('()')).toBeTruthy();
    });

    test('Case 2', () => {
        expect(checkValidString('(*)')).toBeTruthy();
    });

    test('Case 3', () => {
        expect(checkValidString('(*))')).toBeTruthy();
    });
});
