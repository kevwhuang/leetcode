const characterReplacement = require('../../algorithms/sliding-window/longest-repeating-character-replacement');

describe('Main', () => {
    test('Case 1', () => {
        expect(characterReplacement('ABAB', 2)).toStrictEqual(4);
    });

    test('Case 2', () => {
        expect(characterReplacement('AABABBA', 1)).toStrictEqual(4);
    });
});
