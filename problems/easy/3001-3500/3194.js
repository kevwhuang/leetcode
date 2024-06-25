// 3194 - Minimum Average of Smallest and Largest Elements

function minimumAverage(nums) {
    nums.sort((a, b) => a - b);
    let min = 100, len = nums.length;
    for (let i = 0; i < len; i++) {
        min = Math.min(nums[i] + nums[len - i - 1], min);
    }
    return min / 2;
}
