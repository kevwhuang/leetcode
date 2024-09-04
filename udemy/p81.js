// 81 - Trie Exercise - addWord

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
}
