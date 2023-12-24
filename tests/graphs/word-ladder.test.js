const ladderLength = require('../../neetcode/graphs/word-ladder');

describe('Main', () => {
    test('Case 1', () => {
        const wordList = ['hot', 'dot', 'dog', 'lot', 'log', 'cog'];
        expect(ladderLength('hit', 'cog', wordList)).toStrictEqual(5);
    });

    test('Case 2', () => {
        const wordList = ['hot', 'dot', 'dog', 'lot', 'log'];
        expect(ladderLength('hit', 'cog', wordList)).toStrictEqual(0);
    });
});
