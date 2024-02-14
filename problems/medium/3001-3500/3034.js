// 3034 - Number of Subarrays That Match a Pattern I

function countMatchingSubarrays(nums, pattern) {
    let subarrays = 0;
    const bound = nums.length - pattern.length;
    for (let i = 0; i < bound; i++) {
        let k = 0;
        while (k < pattern.length) {
            if (pattern[k] === 1) {
                if (nums[i + k + 1] <= nums[i + k]) break;
            } else if (pattern[k] === -1) {
                if (nums[i + k + 1] >= nums[i + k]) break;
            } else {
                if (nums[i + k + 1] !== nums[i + k]) break;
            }
            k++;
        }
        if (k === pattern.length) subarrays++;
    }
    return subarrays;
}
