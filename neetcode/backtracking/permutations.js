// 46 - Permutations

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

function permute(nums) {
    function backtrack(arr, i) {
        if (permutations.length === resLen) return;
        if (i === len) return permutations.push([...arr]);
        for (let j = i; j < len; j++) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            backtrack(arr, i + 1);
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    const len = nums.length;
    const resLen = [0, 1, 2, 6, 24, 120, 720][len];
    const permutations = [];
    backtrack(nums, 0);
    return permutations;
}

module.exports = permute;
