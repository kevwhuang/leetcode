const checkInclusion = require('../../neetcode/sliding-window/permutation-in-string');

describe('Main', () => {
    test('Case 1', () => {
        expect(checkInclusion('ab', 'eidbaooo')).toBeTruthy();
    });

    test('Case 2', () => {
        expect(checkInclusion('ab', 'eidboaoo')).toBeFalsy();
    });
});
