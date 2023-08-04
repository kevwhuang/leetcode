/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

module.exports = function search(nums, target) {
    let l = 0;
    let h = nums.length - 1;
    let m = Math.floor((l + h) / 2);
    while (l <= h) {
        if (nums[m] === target) return m;
        if (nums[m] < target) l = m + 1;
        if (nums[m] > target) h = m - 1;
        m = Math.floor((l + h) / 2);
    }
    return -1;
};
