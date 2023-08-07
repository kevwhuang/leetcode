// 283 - Move Zeroes

function moveZeroes(nums) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        if (nums[left]) left++;
        else {
            nums.splice(left, 1);
            nums.push(0);
            right--;
        }
    }
}
