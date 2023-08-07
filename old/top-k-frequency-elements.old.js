/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

module.exports = function topKFrequent(nums, k) {
    const map = {};
    const output = [];
    for (const e of nums) map[e] ? map[e] += 1 : map[e] = 1;
    const freqs = Object.values(map).sort((a, b) => b - a).slice(0, k);
    for (const e of freqs) for (const f in map) {
        if (map[f] === e && output.length < k) {
            output.push(+f);
            delete map[f];
        }
    }
    return output;
};
