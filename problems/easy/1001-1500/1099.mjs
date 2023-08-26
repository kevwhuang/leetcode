// 1099 - Two Sum Less Than K

function twoSumLessThanK(nums, k) {
    nums.sort((a, b) => a - b);
    let max = -1;
    let l = 0;
    let r = nums.length - 1;
    let sum;
    while (l < r) {
        sum = nums[l] + nums[r];
        if (sum < k) {
            max = Math.max(sum, max);
            l++;
        } else {
            r--;
        }
    }
    return max;
}
