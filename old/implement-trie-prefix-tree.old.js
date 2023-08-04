module.exports = class Trie {
    /**
     * @param {string[][]} data
     */

    constructor() {
        this.data = [];
    }

    /**
     * @param {string} word
     * @return {void}
     */

    insert(word) {
        this.data.push(word);
    }

    /**
     * @param {string} word
     * @return {boolean}
     */

    search(word) {
        for (const e of this.data) {
            if (e === word) return true;
        }
        return false;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */

    startsWith(prefix) {
        for (const e of this.data) {
            if (e.startsWith(prefix)) return true;
        }
        return false;
    }
};
