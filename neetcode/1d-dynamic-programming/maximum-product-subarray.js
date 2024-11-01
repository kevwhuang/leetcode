// 152 - Maximum Product Subarray

/**
 * @param {number[]} nums
 * @return {number}
 */

function maxProduct(nums) {
    let res = nums[0], min = res, max = res, swap;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < 0) swap = min, min = max, max = swap;
        min = Math.min(nums[i], nums[i] * min);
        max = Math.max(nums[i], nums[i] * max);
        res = Math.max(max, res);
    }
    return res;
}

module.exports = maxProduct;
