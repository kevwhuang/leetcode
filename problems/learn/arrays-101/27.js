// 27 - Remove Element

function removeElement(nums, val) {
    let remaining = nums.length;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            delete nums[i];
            remaining--;
        }
    }
    nums.sort();
    return remaining;
}
