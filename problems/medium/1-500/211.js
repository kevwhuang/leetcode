// 211 - Design Add and Search Words Data Structure

class WordDictionary {
    constructor() {
        this.trie = {};
    }
    addWord(word) {
        let node = this.trie;
        for (let i = 0, char; i < word.length; i++) {
            char = word[i];
            if (!node[char]) node[char] = {};
            node = node[char];
        }
        node.isWord = true;
    }
    search(word, i = 0, node = this.trie) {
        if (i === word.length) return Boolean(node.isWord);
        if (word[i] === '.') {
            for (const char in node) {
                if (this.search(word, i + 1, node[char])) return true;
            }
        } else {
            if (!node[word[i]]) return false;
            return this.search(word, i + 1, node[word[i]]);
        }
        return false;
    }
}
