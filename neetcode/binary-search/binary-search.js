// 704 - Binary Search

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

function search(nums, target) {
    let l = 0, r = nums.length - 1;
    while (l <= r) {
        const m = l + r >> 1;
        if (nums[m] < target) l = m + 1;
        else if (nums[m] > target) r = m - 1;
        else return m;
    }
    return -1;
}

module.exports = search;
