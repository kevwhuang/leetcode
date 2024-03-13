// 238 - Product of Array Except Self

function productExceptSelf(nums) {
    const res = [];
    let leftMult = 1, rightMult = 1;
    for (let i = 0; i < nums.length; i++) {
        res[i] = leftMult;
        leftMult *= nums[i];
    }
    for (let i = nums.length - 1; i > 0; i--) {
        rightMult *= nums[i];
        res[i - 1] *= rightMult;
    }
    return res;
}
