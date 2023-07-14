/**
 * @param {number[]} nums
 * @return {number[]}
 */

module.exports = productExceptSelf;

function productExceptSelf(nums) {
    const result = [];
    let leftMult = 1;
    let rightMult = 1;
    for (let i = 0; i < nums.length; i++) {
        result[i] = leftMult;
        leftMult *= nums[i];
    }
    for (let i = nums.length - 1; i > 0; i--) {
        rightMult *= nums[i];
        result[i - 1] *= rightMult;
    }
    return result;
};
