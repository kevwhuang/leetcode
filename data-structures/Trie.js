class Trie {
    constructor() {
        this.trie = {};
    }
    add(word) {
        let node = this.trie;
        for (let i = 0; i < word.length; i++) {
            node[word[i]] ??= {};
            node = node[word[i]];
        }
        node.end = true;
        return word;
    }
    exists(word, base) {
        let node = this.trie;
        for (let i = 0; i < word.length; i++) {
            if (!node[word[i]]) return false;
            node = node[word[i]];
        }
        return node.end ?? base ?? false;
    }
    remove(word) {
        let node = this.trie;
        for (let i = 0; i < word.length; i++) {
            if (!node[word[i]]) return null;
            node = node[word[i]];
        }
        delete node.end;
        return word;
    }
    startsWith(prefix) {
        return this.exists(prefix, true);
    }
}

module.exports = Trie;
