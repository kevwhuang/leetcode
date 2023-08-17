// 347 - Top K Frequent Elements

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

function topKFrequent(nums, k) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], map.get(nums[i]) + 1 || 1);
    }
    const bucket = [];
    for (const [num, freq] of map) {
        bucket[freq] = (bucket[freq] || new Set()).add(num);
    }
    const res = [];
    for (let i = bucket.length - 1; i >= 0; i--) {
        bucket[i] && res.push(...bucket[i]);
        if (res.length === k) break;
    }
    return res;
}

module.exports = topKFrequent;
