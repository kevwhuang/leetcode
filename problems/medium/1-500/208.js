// 208 - Implement Trie (Prefix Tree)

class Trie {
    constructor() {
        this.trie = {};
    }
    insert(word) {
        let node = this.trie;
        for (let i = 0; i < word.length; i++) {
            node[word[i]] ??= {};
            node = node[word[i]];
        }
        node.end = true;
    }
    search(word, base) {
        let node = this.trie;
        for (let i = 0; i < word.length; i++) {
            if (!node[word[i]]) return false;
            node = node[word[i]];
        }
        return node.end ?? base ?? false;
    }
    startsWith(prefix) {
        return this.search(prefix, true);
    }
}
