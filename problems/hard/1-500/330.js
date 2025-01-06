// 330 - Patching Array

function minPatches(nums, n) {
    let res = 0, lim = 0, i = 0;
    while (lim < n) {
        if (i < nums.length && nums[i] <= lim + 1) lim += nums[i++];
        else res++, lim += lim + 1;
    }
    return res;
}
