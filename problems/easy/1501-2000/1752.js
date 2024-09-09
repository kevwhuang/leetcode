// 1752 - Check If Array Is Sorted and Rotated

function check(nums) {
    for (let i = 1, rotated = false; i < nums.length; i++) {
        if (nums[i - 1] > nums[i]) {
            if (rotated) return false;
            rotated = true;
        }
        if (rotated && nums[0] < nums[i]) return false;
    }
    return true;
}
