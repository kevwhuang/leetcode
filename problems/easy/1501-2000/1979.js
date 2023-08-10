// 1979 - Find Greatest Common Divisor of Array

function findGCD(nums) {
    let min = nums[0],
        max = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < min) min = nums[i];
        else if (nums[i] > max) max = nums[i];
    }
    let gcd = 1;
    for (let i = 2; i <= min; i++) {
        if (min % i === 0 && max % i === 0) gcd = i;
    }
    return gcd;
}
