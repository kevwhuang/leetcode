// 146 - LRU Cache

class LRUCache {
    /**
     * @param {number} capacity
     */

    constructor(capacity) {
        this.map = new Map();
        this.capacity = capacity;
    }

    /**
     * @param {number} key
     * @return {number}
     */

    get(key) {
        const res = this.map.get(key) ?? -1;
        if (~res) this.map.delete(key);
        if (~res) this.map.set(key, res);
        return res;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */

    put(key, value) {
        this.map.delete(key);
        this.map.set(key, value);
        if (this.map.size <= this.capacity) return;
        this.map.delete(this.map.keys().next().value);
    }
}

module.exports = LRUCache;
