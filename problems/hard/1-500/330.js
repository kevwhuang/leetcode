// 330 - Patching Array

function minPatches(nums, n) {
    let patches = 0, obtainable = 0, i = 0;
    while (obtainable < n) {
        if (i < nums.length && nums[i] <= obtainable + 1) {
            obtainable += nums[i++];
        } else {
            patches++;
            obtainable += obtainable + 1;
        }
    }
    return patches;
}
