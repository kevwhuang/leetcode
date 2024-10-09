// 12 - productOfArray

function productOfArray(nums) {
    function multiply(nums) {
        if (nums.length === 0) return;
        prod *= nums.pop();
        multiply(nums);
    }
    let prod = 1;
    multiply(nums);
    return prod;
}
