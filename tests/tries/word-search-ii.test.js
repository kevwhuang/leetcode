const findWords = require('../../neetcode/tries/word-search-ii');

describe('Main', () => {
    test('Case 1', () => {
        const board = [
            ['o', 'a', 'a', 'n'],
            ['e', 't', 'a', 'e'],
            ['i', 'h', 'k', 'r'],
            ['i', 'f', 'l', 'v'],
        ];
        const words = ['oath', 'pea', 'eat', 'rain'];
        expect(findWords(board, words)).toStrictEqual(['oath', 'eat']);
    });
    test('Case 2', () => {
        expect(findWords([['a', 'b'], ['c', 'd']], ['abcb'])).toStrictEqual([]);
    });
});
