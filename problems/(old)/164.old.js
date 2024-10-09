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
    nums = radixSort(nums, ~~(Math.log10(Math.max(...nums))));
    let max = 0;
    for (let i = 1; i < nums.length; i++) {
        max = Math.max(nums[i] - nums[i - 1], max);
    }
    return max;
}
