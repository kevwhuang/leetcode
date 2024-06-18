// 2576 - Find the Maximum Number of Marked Indices

function maxNumOfMarkedIndices(nums) {
    nums.sort((a, b) => a - b);
    const len = nums.length;
    let l = 0, r = Math.ceil(len / 2);
    while (true) {
        while (r < len && 2 * nums[l] > nums[r]) r++;
        if (r === len) return l + l;
        l++, r++;
    }
}
