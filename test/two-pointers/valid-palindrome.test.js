const isPalindrome = require('../../algorithms/two-pointers/valid-palindrome');

describe('Main', () => {
    test('Case 1', () => {
        expect(isPalindrome('A man, a plan, a canal: Panama')).toBeTruthy();
    });

    test('Case 2', () => {
        expect(isPalindrome('race a car')).toBeFalsy();
    });

    test('Case 3', () => {
        expect(isPalindrome(' ')).toBeTruthy();
    });
});
