const WordDictionary = require('../../neetcode/tries/design-add-and-search-words-data-structure');

describe('Main', () => {
    test('Case 1', () => {
        const wordDictionary = new WordDictionary();
        wordDictionary.addWord('bad');
        wordDictionary.addWord('dad');
        wordDictionary.addWord('mad');
        expect(wordDictionary.search('pad')).toBeFalsy();
        expect(wordDictionary.search('bad')).toBeTruthy();
        expect(wordDictionary.search('.ad')).toBeTruthy();
        expect(wordDictionary.search('b..')).toBeTruthy();
    });
});
