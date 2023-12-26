const letterCombinations = require('../../neetcode/backtracking/letter-combinations-of-a-phone-number');

describe('Main', () => {
    test('Case 1', () => {
        const solution = ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'];
        expect(letterCombinations('23')).toStrictEqual(solution);
    });
    test('Case 2', () => {
        expect(letterCombinations('')).toStrictEqual([]);
    });
    test('Case 3', () => {
        expect(letterCombinations('2')).toStrictEqual(['a', 'b', 'c']);
    });
});
