// 2936 - Number of Equal Numbers Blocks

function countBlocks(nums) {
    let blocks = 0, first = 0;
    const last = nums.size() - 1;
    while (first <= last) {
        const target = nums.at(first);
        let l = first, r = last;
        while (l <= r) {
            const m = Math.floor((l + r) / 2);
            if (nums.at(m) === target) l = m + 1;
            else r = m - 1;
        }
        blocks++;
        first = r + 1;
    }
    return blocks;
}
