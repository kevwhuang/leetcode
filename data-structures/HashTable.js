class HashTable {
    constructor(size, prime) {
        if (!Number.isInteger(size) || size <= 1 || size >= 1e6) size = 193;
        if (!Number.isInteger(prime) || prime <= 1 || prime >= 1e6) prime = 53;
        this.hash = new Array(size);
        this.prime = prime;
    }
    get(key) {
        const idx = this.#hash(key);
        if (!this.hash[idx]) return null;
        for (let i = 0; i < this.hash.length; i++) {
            if (this.hash[idx][i][0] === key) return this.hash[idx][i][1];
        }
        return null;
    }
    keys() {
        const res = [];
        for (let i = 0; i < this.hash.length; i++) {
            if (!this.hash[i]) continue;
            for (let j = 0; j < this.hash[i].length; j++) {
                res.push(this.hash[i][j][0]);
            }
        }
        return res;
    }
    set(key, val) {
        const idx = this.#hash(key);
        this.hash[idx] ??= [];
        for (let i = 0; i < this.hash[idx].length; i++) {
            if (this.hash[idx][i][0] !== key) continue;
            return this.hash[idx][i][1] = val;
        }
        this.hash[idx].push([key, val]);
        return val;
    }
    values() {
        const res = [];
        for (let i = 0; i < this.hash.length; i++) {
            if (!this.hash[i]) continue;
            for (let j = 0; j < this.hash[i].length; j++) {
                if (res.includes(this.hash[i][j][1])) continue;
                res.push(this.hash[i][j][1]);
            }
        }
        return res;
    }
    #hash(key) {
        let res = 0;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            res *= this.prime;
            res += key.charCodeAt(i);
            res %= this.hash.length;
        }
        return res;
    }
}

module.exports = HashTable;
