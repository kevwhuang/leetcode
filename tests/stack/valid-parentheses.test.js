const isValid = require('../../algorithms/stack/valid-parentheses');

describe('Main', () => {
    test('Case 1', () => {
        expect(isValid('()')).toBeTruthy();
    });

    test('Case 2', () => {
        expect(isValid('()[]{}')).toBeTruthy();
    });

    test('Case 3', () => {
        expect(isValid('(]')).toBeFalsy();
    });
});
