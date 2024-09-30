// 3300 - Minimum Element After Replacement With Digit Sum

function minElement(nums) {
    let min = Infinity;
    for (let i = 0; i < nums.length; i++) {
        let sum = 0, num = nums[i];
        while (num) {
            sum += num % 10;
            num = num / 10 >> 0;
        }
        min = Math.min(sum, min);
    }
    return min;
}
