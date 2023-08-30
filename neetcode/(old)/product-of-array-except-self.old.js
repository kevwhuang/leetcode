/**
 * @param {number[]} nums
 * @return {number[]}
 */

module.exports = function productExceptSelf(nums) {
    const L = nums.length;
    const output = [];
    let zeroExists = false;
    let product = 1;
    let zeroCount = 0;
    for (let i = 0; i < L; i++) {
        if (nums[i]) product *= nums[i];
        else {
            zeroExists = true;
            zeroCount++;
        }
    }
    if (zeroCount > 1) return new Array(L).fill(0);
    for (let i = 0; i < L; i++) {
        if (!zeroExists && nums[i]) output[i] = product * nums[i] ** -1;
        else nums[i] ? output[i] = 0 : output[i] = product;
    }
    return output;
};
