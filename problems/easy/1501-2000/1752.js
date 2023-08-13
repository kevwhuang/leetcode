// 1752 - Check If Array Is Sorted and Rotated

function check(nums) {
    for (let i = 1, rotated = false; i < nums.length; i++) {
        if (nums[i] < nums[i - 1]) {
            if (rotated) return false;
            else rotated = true;
        }
        if (rotated && nums[i] > nums[0]) return false;
    }
    return true;
}
