// 238 - Product of Array Except Self

function productExceptSelf(nums) {
    const res = [];
    let prodLeft = 1;
    for (let i = 0; i < nums.length; i++) {
        res[i] = prodLeft;
        prodLeft *= nums[i];
    }
    let prodRight = 1;
    for (let i = nums.length - 1; i; i--) {
        prodRight *= nums[i];
        res[i - 1] *= prodRight;
    }
    return res;
}
