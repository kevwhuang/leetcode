// 15 - 3Sum

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

function threeSum(nums) {
    nums.sort((a, b) => a - b);
    const triplets = [];
    for (let i = 0, cur, l, r; i < nums.length - 2; i++) {
        cur = nums[i];
        if (cur > 0) break;
        if (nums[i - 1] === nums[i]) continue;
        l = i + 1, r = nums.length - 1;
        while (l < r) {
            let sum = cur + nums[l] + nums[r];
            if (sum < 0) {
                l++;
            } else if (sum > 0) {
                r--;
            } else {
                triplets.push([cur, nums[l++], nums[r--]]);
                while (nums[l - 1] === nums[l]) l++;
                while (nums[r] === nums[r + 1]) r--;
            }
        }
    }
    return triplets;
}

module.exports = threeSum;
