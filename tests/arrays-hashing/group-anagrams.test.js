const groupAnagrams = require('../../neetcode/arrays-hashing/group-anagrams');

describe('Main', () => {
    test('Case 1', () => {
        const solution = [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']];
        expect(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])).toStrictEqual(solution);
    });
    test('Case 2', () => {
        expect(groupAnagrams([''])).toStrictEqual([['']]);
    });
    test('Case 3', () => {
        expect(groupAnagrams(['a'])).toStrictEqual([['a']]);
    });
});
