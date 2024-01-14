// 283 - Move Zeros

function moveZeroes(nums) {
    let zeros = 0;
    for (let i = 0, left = 0; i < nums.length; i++) {
        if (nums[i] === 0) zeros++;
        else nums[left++] = nums[i];
    }
    for (let i = nums.length - zeros; i < nums.length; i++) {
        nums[i] = 0;
    }
}
