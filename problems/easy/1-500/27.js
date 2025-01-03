// 27 - Remove Element

function removeElement(nums, val) {
    let l = 0, r = 0;
    while (true) {
        while (r < nums.length && nums[r] === val) r++;
        if (r === nums.length) break;
        nums[l++] = nums[r++];
    }
    return l;
}
