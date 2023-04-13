/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

module.exports = function twoSum(nums, target) {
    const LEN = nums.length;
    for (let i = 0; i < LEN; i++) {
        const check = nums.slice(i + 1);
        const LEN2 = check.length;
        for (let j = 0; j < LEN2; j++) {
            if (nums[i] + check[j] === target) return [i, i + j + 1];
        }
    }
}
