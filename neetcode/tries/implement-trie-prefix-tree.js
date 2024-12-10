// 208 - Implement Trie (Prefix Tree)

class Trie {
    constructor() {
        this.trie = {};
    }

    /**
     * @param {string} word
     * @return {void}
     */

    insert(word) {
        let node = this.trie;
        for (let i = 0; i < word.length; i++) {
            node[word[i]] ??= {};
            node = node[word[i]];
        }
        node.end = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */

    search(word, base) {
        let node = this.trie;
        for (let i = 0; i < word.length; i++) {
            if (!node[word[i]]) return false;
            node = node[word[i]];
        }
        return node.end ?? base ?? false;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */

    startsWith(prefix) {
        return this.search(prefix, true);
    }
}

module.exports = Trie;
