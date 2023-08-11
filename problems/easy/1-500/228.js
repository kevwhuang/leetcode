// 228 - Summary Ranges

function summaryRanges(nums) {
    const output = [];
    for (let i = 0, start = nums[0]; i < nums.length; i++) {
        if (nums[i] + 1 !== nums[i + 1]) {
            output.push(start === nums[i] ? `${start}` : `${start}->${nums[i]}`);
            start = nums[i + 1];
        }
    }
    return output;
}
