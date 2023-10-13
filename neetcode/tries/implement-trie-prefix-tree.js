// 208 - Implement Trie (Prefix Tree)

class Trie {
    constructor() {
        this.children = {};
        this.isWord = false;
    }

    /**
     * @param {string} word
     * @return {void}
     */

    insert(word) {
        let cur = this;
        for (let i = 0; i < word.length; i++) {
            cur.children[word[i]] = cur.children[word[i]] || new Trie();
            cur = cur.children[word[i]];
        }
        cur.isWord = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */

    search(word) {
        let cur = this;
        for (let i = 0; i < word.length; i++) {
            if (!cur.children[word[i]]) return false;
            cur = cur.children[word[i]];
        }
        return cur.isWord;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */

    startsWith(prefix) {
        let cur = this;
        for (let i = 0; i < prefix.length; i++) {
            if (!cur.children[prefix[i]]) return false;
            cur = cur.children[prefix[i]];
        }
        return true;
    }
}

module.exports = Trie;
