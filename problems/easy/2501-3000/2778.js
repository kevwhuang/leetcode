// 2778 - Sum of Squares of Special Elements

function sumOfSquares(nums) {
    const len = nums.length;
    let sum = 0;
    for (let i = 1; i <= len; i++) {
        if (!(len % i)) sum += nums[i - 1] ** 2;
    }
    return sum;
}
