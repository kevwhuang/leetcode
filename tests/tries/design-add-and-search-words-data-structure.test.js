const WordDictionary = require('../../algorithms/tries/design-add-and-search-words-data-structure');

describe('Main', () => {
    test('Case 1', () => {
        const dictionary = new WordDictionary();

        dictionary.addWord('bad');
        dictionary.addWord('dad');
        dictionary.addWord('mad');
        expect(dictionary.search('pad')).toBeFalsy();
        expect(dictionary.search('bad')).toBeTruthy();
        expect(dictionary.search('.ad')).toBeTruthy();
        expect(dictionary.search('b..')).toBeTruthy();
    });
});
