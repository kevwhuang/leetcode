// 347 - Top K Frequent Elements

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

function topKFrequent(nums, k) {
    const map = new Map();
    const bucket = [];
    const output = [];
    for (const num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    for (const [num, freq] of map) {
        bucket[freq] = (bucket[freq] || new Set()).add(num);
    }
    for (let i = bucket.length - 1; i >= 0; i--) {
        bucket[i] && output.push(...bucket[i]);
        if (output.length === k) break;
    }
    return output;
}

module.exports = topKFrequent;
