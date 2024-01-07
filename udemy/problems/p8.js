// 8 - Sliding Window - minSubArrayLen

function minSubArrayLen(nums, target) {
    let min = Infinity, sum = 0, i = 0, j = 0;
    while (j < nums.length) {
        sum += nums[j++];
        while (sum >= target) {
            min = Math.min(j - i, min);
            sum -= nums[i++];
        }
    }
    return min === Infinity ? 0 : min;
}
