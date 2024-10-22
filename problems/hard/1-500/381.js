// 381 - Insert Delete GetRandom O(1) - Duplicates Allowed

class RandomizedCollection {
    constructor() {
        this.map = new Map();
        this.nums = [];
    }
    getRandom() {
        return this.nums[this.nums.length * Math.random() >> 0];
    }
    insert(val) {
        const map = this.map, nums = this.nums;
        if (!map.has(val)) map.set(val, new Set());
        map.get(val).add(nums.length);
        nums.push(val);
        return map.get(val).size === 1;
    }
    remove(val) {
        const map = this.map, nums = this.nums;
        if (!map.has(val) || map.get(val).size === 0) return false;
        const idx = map.get(val).keys().next().value;
        map.get(val).delete(idx);
        const tail = nums.at(-1);
        map.get(tail).add(idx);
        map.get(tail).delete(nums.length - 1);
        nums[idx] = tail;
        nums.pop();
        return true;
    }
}
