// 152 - Maximum Product Subarray

/**
 * @param {number[]} nums
 * @return {number}
 */

function maxProduct(nums) {
    let res = nums[0], min = res, max = res, cur;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < 0) cur = min, min = max, max = cur;
        min = Math.min(nums[i], nums[i] * min);
        max = Math.max(nums[i], nums[i] * max);
        res = Math.max(max, res);
    }
    return res;
}

module.exports = maxProduct;
