// 189 - Rotate Array

function rotate(nums, k) {
    if (!k) return;
    k %= nums.length;
    let index = k,
        swap = nums[0];
    for (let i = 0; i < nums.length; i++) {
        [nums[index], swap] = [swap, nums[index]];
        index += k;
        if (index >= nums.length) index %= nums.length;
    }
}
