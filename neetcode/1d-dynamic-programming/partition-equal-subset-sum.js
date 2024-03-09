// 416 - Partition Equal Subset Sum

/**
 * @param {number[]} nums
 * @return {boolean}
 */

function canPartition(nums) {
    const bucket = new Array(101).fill(0);
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        bucket[nums[i]]++;
        sum += nums[i];
    }
    if (sum % 2) return false;
    const set = new Set([0]);
    const target = sum / 2;
    let n = Math.min(100, target);
    while (n) {
        if (bucket[n] === 0 && n--) continue;
        let i = 0;
        const bound = set.size;
        for (const subsum of set) {
            const next = subsum + n;
            if (next < target) set.add(next);
            else if (next === target) return true;
            if (++i === bound) break;
        }
        bucket[n] === 1 ? n-- : bucket[n]--;
    }
    return false;
}

module.exports = canPartition;
