// 163 - Missing Ranges

function findMissingRanges(nums, lower, upper) {
    if (!nums.length) return [[lower, upper]];
    const ranges = [];
    nums[0] > lower && ranges.push([lower, nums[0] - 1]);
    for (let i = 1; i < nums.length; i++) {
        nums[i] - nums[i - 1] > 1 && ranges.push([nums[i - 1] + 1, nums[i] - 1]);
    }
    nums.at(-1) < upper && ranges.push([nums.at(-1) + 1, upper]);
    return ranges;
}
