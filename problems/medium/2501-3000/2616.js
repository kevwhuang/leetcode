// 2616 - Minimize the Maximum Difference of Pairs

function minimizeMax(nums, p) {
    nums.sort((a, b) => a - b);
    let min = 0, max = nums.at(-1) - nums[0];
    while (min <= max) {
        const m = min + max >> 1;
        let pairs = 0, i = 1;
        while (i < nums.length) {
            if (nums[i] - nums[i - 1] > m) i++;
            else pairs++, i += 2;
        }
        if (pairs >= p) max = m - 1;
        else min = m + 1;
    }
    return min;
}
