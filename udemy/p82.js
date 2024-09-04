// 82 - Trie Exercise - removeWord

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
    removeWord(word) {
        let trie = this;
        for (let i = 0, cur; i < word.length; i++) {
            cur = trie.characters[word[i]];
            if (Object.keys(cur.characters).length === 1) {
                delete trie.characters[word[i]];
                return;
            }
            trie = cur;
        }
        trie.isWord = false;
    }
}
