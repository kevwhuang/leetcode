// 1464 - Maximum Product of Two Elements in an Array

function maxProduct(nums) {
    let [max1, max2] = [1, 1];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max1) [max1, max2] = [nums[i], max1];
        else if (nums[i] > max2) max2 = nums[i];
    }
    return (max1 - 1) * (max2 - 1);
}
