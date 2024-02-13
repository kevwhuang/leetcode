// 2909 - Minimum Sum of Mountain Triplets II

function minimumSum(nums) {
    const prefixMin = new Array(nums.length);
    prefixMin[0] = nums[0];
    for (let i = 1; i < nums.length; i++) {
        prefixMin[i] = Math.min(nums[i], prefixMin[i - 1]);
    }
    const suffixMin = new Array(nums.length);
    suffixMin[nums.length - 1] = nums[nums.length - 1];
    for (let i = nums.length - 2; i >= 0; i--) {
        suffixMin[i] = Math.min(nums[i], suffixMin[i + 1]);
    }
    let min = Infinity;
    for (let i = 1; i < nums.length - 1; i++) {
        if (prefixMin[i] >= nums[i] || nums[i] <= suffixMin[i]) continue;
        min = Math.min(prefixMin[i] + nums[i] + suffixMin[i], min);
    }
    return min === Infinity ? -1 : min;
}
