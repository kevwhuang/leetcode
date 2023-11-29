const partition = require('../../neetcode/backtracking/palindrome-partitioning');

describe('Main', () => {
    test('Case 1', () => {
        expect(partition('aab')).toStrictEqual([['a', 'a', 'b'], ['aa', 'b']]);
    });

    test('Case 2', () => {
        expect(partition('a')).toStrictEqual([['a']]);
    });
});
