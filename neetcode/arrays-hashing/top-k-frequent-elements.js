// 347 - Top K Frequent Elements

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

function topKFrequent(nums, k) {
    const map = new Map();
    nums.forEach(e => map.set(e, (map.get(e) ?? 0) + 1));
    const B = [];
    for (const e of map) {
        B[e[1]] ??= [];
        B[e[1]].push(e[0]);
    }
    const res = new Int16Array(k);
    for (let i = B.length - 1, j = 0; j < k; i--) {
        while (i && !B[i]) i--;
        B[i].forEach(e => res[j++] = e);
    }
    return res;
}

module.exports = topKFrequent;
