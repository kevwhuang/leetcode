// 303 - Range Sum Query - Immutable

class NumArray {
    constructor(nums) {
        this.nums = nums;
        for (let i = 1; i < nums.length; i++) {
            nums[i] += nums[i - 1];
        }
    }
    sumRange(left, right) {
        return this.nums[right] - (this.nums[left - 1] || 0);
    }
}
