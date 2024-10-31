// 46 - Permutations

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

function permute(nums) {
    function backtrack(i) {
        if (i === nums.length) res.push(new Int8Array(nums));
        for (let j = i; j < nums.length; j++) {
            const swap = nums[i];
            nums[i] = nums[j], nums[j] = swap;
            backtrack(i + 1);
            nums[j] = nums[i], nums[i] = swap;
        }
    }
    const res = [];
    backtrack(0);
    return res;
}

module.exports = permute;
