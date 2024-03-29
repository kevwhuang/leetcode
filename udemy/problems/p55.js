// 55 - Radix Sort

function radixSort(nums) {
    const len = ~~(Math.log10(Math.max(...nums)));
    for (let k = 0; k <= len; k++) {
        const power = Math.pow(10, k);
        const bucket = Array.from({ length: 10 }, () => []);
        for (let i = 0; i < nums.length; i++) {
            bucket[~~(nums[i] / power) % 10].push(nums[i]);
        }
        nums = [].concat(...bucket);
    }
    return nums;
}
