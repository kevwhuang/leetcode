// 2695 - Array Wrapper

class ArrayWrapper {
    constructor(nums) {
        this.nums = nums;
    }
    toString() {
        return JSON.stringify(this.nums);
    }
    valueOf() {
        return this.nums.reduce((s, num) => s + num, 0);
    }
}
