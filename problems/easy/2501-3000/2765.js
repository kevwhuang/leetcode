// 2765 - Longest Alternating Subarray

function alternatingSubarray(nums) {
    let max = -1;
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] + 1 === nums[i + 1]) {
            let len = 2;
            let dir = -1;
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[j] + dir === nums[j + 1]) {
                    len++;
                    dir *= -1;
                } else {
                    break;
                }
            }
            max = Math.max(len, max);
            i += len - 2;
        }
    }
    return max;
}
