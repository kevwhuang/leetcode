// 208 - Implement Trie (Prefix Tree)

class Trie {
    constructor() {
        this.children = {};
    }

    /**
     * @param {string} word
     * @return {void}
     */

    insert(word) {
        let node = this;
        for (let i = 0; i < word.length; i++) {
            const char = word[i];
            if (!(char in node.children)) node.children[char] = new Trie();
            node = node.children[char];
        }
        node.isWord = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */

    search(word) {
        let node = this;
        for (let i = 0; i < word.length; i++) {
            const char = word[i];
            if (!(char in node.children)) return false;
            node = node.children[char];
        }
        return node.isWord ?? false;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */

    startsWith(prefix) {
        let node = this;
        for (let i = 0; i < prefix.length; i++) {
            const char = prefix[i];
            if (!(char in node.children)) return false;
            node = node.children[char];
        }
        return true;
    }
}

module.exports = Trie;
