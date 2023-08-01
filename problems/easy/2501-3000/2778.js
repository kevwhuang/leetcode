// 2778 - Sum of Squares of Special Elements

function sumOfSquares(nums) {
    const length = nums.length;
    let sum = 0;
    for (let i = 1; i <= length; i++) {
        if (!(length % i)) sum += nums[i - 1] ** 2;
    }
    return sum;
}
