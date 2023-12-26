// 2149 - Rearrange Array Elements by Sign

function rearrangeArray(nums) {
    const output = [];
    let positive = 0, negative = 1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            output[positive] = nums[i];
            positive += 2;
        } else {
            output[negative] = nums[i];
            negative += 2;
        }
    }
    return output;
}
