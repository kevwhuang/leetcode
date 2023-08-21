// 2815 - Max Pair Sum in an Array

function maxSum(nums) {
    function maxDigit(num) {
        let max = -Infinity;
        while (num) {
            max = Math.max(num % 10, max);
            num = Math.trunc(num / 10);
        }
        return max;
    }
    let max = -1;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            const sum = nums[i] + nums[j];
            if (sum > max && maxDigit(nums[i]) === maxDigit(nums[j])) {
                max = sum;
            }
        }
    }
    return max;
}
