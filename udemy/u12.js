// 12 - productOfArray

function productOfArray(nums) {
    function multiply(nums) {
        if (!nums.length) return;
        product *= nums.pop();
        multiply(nums);
    }
    let product = 1;
    multiply(nums);
    return product;
}
