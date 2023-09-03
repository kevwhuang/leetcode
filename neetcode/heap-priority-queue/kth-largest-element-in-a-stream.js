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
            let l = 0, r = this.nums.length - 1, m;
            while (l <= r) {
                m = Math.floor((l + r) / 2);
                if (this.nums[m] < val) l = m + 1;
                else if (this.nums[m] > val) r = m - 1;
                else return m;
            }
            return l;
        };
        this.nums.splice(index(), 0, val);
        return this.nums[this.nums.length - this.k];
    }
}

module.exports = KthLargest;
