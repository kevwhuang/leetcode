// 2970 - Count the Number of Incremovable Subarrays I

function incremovableSubarrayCount(nums) {
    let subarrays = 0;
    const len = nums.length;
    for (let l = 0; l < len; l++) {
        L: for (let r = l; r < len; r++) {
            for (let ll = 1; ll < l; ll++) {
                if (nums[ll - 1] >= nums[ll]) continue L;
            }
            if (l - 1 >= 0 && r + 1 < len
                && nums[l - 1] >= nums[r + 1]) continue L;
            for (let rr = r + 2; rr < len; rr++) {
                if (nums[rr - 1] >= nums[rr]) continue L;
            }
            subarrays++;
        }
    }
    return subarrays;
}
