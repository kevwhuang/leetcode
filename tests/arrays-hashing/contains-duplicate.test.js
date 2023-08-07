const containsDuplicate = require('../../neetcode/arrays-hashing/contains-duplicate');

describe('Main', () => {
    test('Case 1', () => {
        expect(containsDuplicate([1, 2, 3, 1])).toBeTruthy();
    });

    test('Case 2', () => {
        expect(containsDuplicate([1, 2, 3, 4])).toBeFalsy();
    });

    test('Case 3', () => {
        expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBeTruthy();
    });
});
