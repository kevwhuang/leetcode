// 8 - Sliding Window - minSubArrayLen

function minSubArrayLen(nums, target) {
    let p1 = 0, p2 = 0, sum = 0, min = Infinity;
    while (p2 < nums.length) {
        sum += nums[p2++];
        while (sum >= target) {
            min = Math.min(p2 - p1, min);
            sum -= nums[p1++];
        }
    }
    return min === Infinity ? 0 : min;
}
