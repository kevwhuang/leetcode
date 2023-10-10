class HashTable {
    constructor(size, prime) {
        if (!Number.isInteger(size) || size <= 1 || size >= 1e6) size = 193;
        if (!Number.isInteger(prime) || prime <= 1 || prime >= 1e6) prime = 53;
        this.map = new Array(size);
        this.prime = prime;
    }

    get(key) {
        const index = this.#hash(key);
        if (!this.map[index]) return false;
        for (let i = 0; i < this.map.length; i++) {
            if (this.map[index][i][0] === key) return this.map[index][i][1];
        }
        return false;
    }

    keys() {
        const res = [];
        for (let i = 0; i < this.map.length; i++) {
            if (!this.map[i]) continue;
            for (let j = 0; j < this.map[i].length; j++) {
                res.push(this.map[i][j][0]);
            }
        }
        return res;
    }

    set(key, val) {
        const index = this.#hash(key);
        if (!this.map[index]) this.map[index] = [];
        for (let i = 0; i < this.map[index].length; i++) {
            if (this.map[index][i][0] !== key) continue;
            this.map[index][i][1] = val;
            return true;
        }
        this.map[index].push([key, val]);
        return true;
    }

    values() {
        const res = [];
        for (let i = 0; i < this.map.length; i++) {
            if (!this.map[i]) continue;
            for (let j = 0; j < this.map[i].length; j++) {
                if (res.includes(this.map[i][j][1])) continue;
                res.push(this.map[i][j][1]);
            }
        }
        return res;
    }

    #hash(key) {
        let index = 0;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            index *= this.prime;
            index += key.charCodeAt(i);
            index %= this.map.length;
        }
        return index;
    }
}
