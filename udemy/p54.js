// 54 - Radix Sort Helper - mostDigits

function mostDigits(nums) {
    return nums.length ? ~~(Math.log10(Math.max(...nums))) + 1 : 0;
}
