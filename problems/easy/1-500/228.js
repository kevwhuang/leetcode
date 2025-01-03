// 228 - Summary Ranges

function summaryRanges(nums) {
    const res = [], n = nums.length;
    for (let i = 0, start = nums[0]; i < n; i++) {
        const cur = nums[i], next = nums[i + 1];
        if (cur + 1 === next) continue;
        res.push(cur === start ? `${start}` : `${start}->${cur}`);
        start = next;
    }
    return res;
}
