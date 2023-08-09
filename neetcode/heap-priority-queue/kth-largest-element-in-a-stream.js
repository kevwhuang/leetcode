// 703 - Kth Largest Element in a Stream

class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */

    constructor(k, nums) {
        this.k = k;
        this.nums = nums.sort((a, b) => a - b);
    }

    /**
     * @param {number} val
     * @returns {number}
     */

    add(val) {
        const index = () => {
            let left = 0,
                right = this.nums.length - 1;
            while (left <= right) {
                const mid = Math.floor((left + right) / 2);
                if (this.nums[mid] < val) left = mid + 1;
                else if (this.nums[mid] > val) right = mid - 1;
                else return mid;
            }
            return left;
        };
        this.nums.splice(index(), 0, val);
        return this.nums[this.nums.length - this.k];
    }
}

module.exports = KthLargest;
