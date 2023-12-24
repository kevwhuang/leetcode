const findWords = require('../../neetcode/tries/word-search-ii');

describe('Main', () => {
    test('Case 1', () => {
        const board = [
            ['o', 'a', 'a', 'n'],
            ['e', 't', 'a', 'e'],
            ['i', 'h', 'k', 'r'],
            ['i', 'f', 'l', 'v'],
        ];
        expect(findWords(board, ['oath', 'pea', 'eat', 'rain'])).toStrictEqual(['eat', 'oath']);
    });

    test('Case 2', () => {
        expect(findWords([['a', 'b'], ['c', 'd']], ['abcb'])).toStrictEqual([]);
    });
});
