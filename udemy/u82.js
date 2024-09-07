// 82 - Trie Exercise - findWord

class Trie {
    constructor() {
        this.characters = {};
        this.isWord = false;
    }
    addWord(word) {
        let trie = this;
        for (let i = 0; i < word.length; i++) {
            trie.characters[word[i]] = trie.characters[word[i]] || new Trie();
            trie = trie.characters[word[i]];
        }
        trie.isWord = true;
    }
    findWord(word) {
        let trie = this;
        for (let i = 0; i < word.length; i++) {
            if (!trie.characters[word[i]]) return;
            trie = trie.characters[word[i]];
        }
        return trie;
    }
}
