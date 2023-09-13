const { TrieNode, Trie } = require('../../neetcode/tries/implement-trie-prefix-tree');

describe('Main', () => {
    test('Case 1', () => {
        const trie = new Trie();
        trie.insert('apple');
        expect(trie.search('apple')).toBeTruthy();
        expect(trie.search('app')).toBeFalsy();
        expect(trie.startsWith('app')).toBeTruthy();
        trie.insert('app');
        expect(trie.search('app')).toBeTruthy();
    });
});
