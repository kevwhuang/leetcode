// 981 - Time Based Key-Value Store

class TimeMap {
    constructor() {
        this.store = {};
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */

    get(key, timestamp) {
        const data = this.store[key];
        if (!data || data[0][0] > timestamp) return '';
        let l = 0, r = data.length - 1;
        while (l < r) {
            const m = Math.ceil((l + r) / 2);
            if (data[m][0] < timestamp) l = m;
            else if (data[m][0] > timestamp) r = m - 1;
            else return data[m][1];
        }
        return data[r][1];
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */

    set(key, value, timestamp) {
        if (!this.store[key]) this.store[key] = [];
        this.store[key].push([timestamp, value]);
    }
}

module.exports = TimeMap;
