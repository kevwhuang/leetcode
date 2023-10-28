// 164 - Maximum Gap

function maximumGap(nums) {
    function radixSort(nums, len) {
        for (let k = 0, power = 1; k <= len; k++) {
            const bucket = Array.from({ length: 10 }, () => []);
            for (let i = 0; i < nums.length; i++) {
                bucket[~~(nums[i] / power) % 10].push(nums[i]);
            }
            nums = [].concat(...bucket);
            power *= 10;
        }
        return nums;
    }
    if (nums.length < 2) return 0;
    let maxNum = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        maxNum = Math.max(nums[i], maxNum);
    }
    nums = radixSort(nums, ~~(Math.log10(maxNum)));
    let maxDiff = 0;
    for (let i = 1; i < nums.length; i++) {
        maxDiff = Math.max(nums[i] - nums[i - 1], maxDiff);
    }
    return maxDiff;
}
