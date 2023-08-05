// 381 - Insert Delete GetRandom O(1) - Duplicates Allowed

class RandomizedCollection {
    constructor() {
        this.nums = [];
        this.indices = new Map();
    }
    getRandom() {
        return this.nums[~~(this.nums.length * Math.random())];
    }
    insert(val) {
        if (!this.indices.has(val)) this.indices.set(val, new Set());
        this.indices.get(val).add(this.nums.length);
        this.nums.push(val);
        return this.indices.get(val).size === 1;
    }
    remove(val) {
        const map = this.indices;
        if (!map.has(val) || !map.get(val).size) return false;
        const idx = map.get(val).keys().next().value;
        map.get(val).delete(idx);
        const tail = this.nums.at(-1);
        map.get(tail).add(idx);
        map.get(tail).delete(this.nums.length - 1);
        this.nums[idx] = tail;
        this.nums.pop();
        return true;
    }
}
