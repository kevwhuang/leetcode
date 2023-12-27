// 1099 - Two Sum Less Than K

function twoSumLessThanK(nums, k) {
    nums.sort((a, b) => a - b);
    let max = -1, l = 0, r = nums.length - 1, sum;
    while (l < r) {
        sum = nums[l] + nums[r];
        if (sum < k) (max = Math.max(sum, max)) && l++;
        else r--;
    }
    return max;
}
