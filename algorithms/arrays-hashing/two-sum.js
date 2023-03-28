/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        const check = nums.slice(i + 1);

        for (let j = 0; j < check.length; j++) {
            if (nums[i] + check[j] === target) return [i, i + j + 1];
        }
    }
}

module.exports = twoSum;
