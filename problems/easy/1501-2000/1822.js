// 1822 - Sign of the Product of an Array

function arraySign(nums) {
    let sign = 1;
    for (let i = 0; i < nums.length; i++) {
        const n = nums[i];
        if (n < 0) sign = -sign;
        else if (n === 0) return 0;
    }
    return sign;
}
