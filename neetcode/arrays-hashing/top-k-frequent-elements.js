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
    const entries = [...map.entries()], bucket = [];
    for (let i = 0; i < entries.length; i++) {
        bucket[entries[i][1]] = (bucket[entries[i][1]] || new Set()).add(entries[i][0]);
    }
    const res = [];
    for (let i = bucket.length - 1; i >= 0; i--) {
        if (bucket[i]) res.push(...bucket[i]);
        if (res.length === k) break;
    }
    return res;
}

module.exports = topKFrequent;
