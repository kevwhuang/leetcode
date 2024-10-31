// 1 - Two Sum

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const d = target - nums[i];
        if (map.has(d)) return [map.get(d), i];
        map.set(nums[i], i);
    }
}

module.exports = twoSum;
