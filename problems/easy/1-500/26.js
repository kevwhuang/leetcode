// 26 - Remove Duplicates From Sorted Array

function removeDuplicates(nums) {
    let l = 0;
    for (let r = 1; r < nums.length; r++) {
        if (nums[l] !== nums[r]) nums[++l] = nums[r];
    }
    return l + 1;
}
