const isAnagram = require('../../neetcode/arrays-hashing/valid-anagram');

describe('Main', () => {
    test('Case 1', () => {
        expect(isAnagram('anagram', 'nagaram')).toBeTruthy();
    });

    test('Case 2', () => {
        expect(isAnagram('rat', 'car')).toBeFalsy();
    });
});
