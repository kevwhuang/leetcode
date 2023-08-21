// 170 - Two Sum III - Data Structure Design

class TwoSum {
    constructor() {
        this.nums = new Map();
    }
    add(number) {
        this.nums.set(number, this.nums.get(number) + 1 || 1);
    }
    find(value) {
        for (const e of this.nums.keys()) {
            if (this.nums.has(value - e)) {
                if (value === 2 * e) {
                    if (this.nums.get(e) >= 2) return true;
                } else {
                    return true;
                }
            }
        }
        return false;
    }
}
