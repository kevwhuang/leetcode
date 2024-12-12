// 719 - Find Kth Smallest Pair Distance

function smallestDistancePair(nums, k) {
    nums = new Uint32Array(nums).sort();
    let l = 0, r = nums.at(-1) - nums[0];
    while (l < r) {
        let cnt = 0;
        const m = l + r >> 1;
        for (let l = 0, r = 0; r < nums.length; r++) {
            while (nums[l] + m < nums[r]) l++;
            cnt += r - l;
        }
        if (cnt < k) l = m + 1;
        else r = m;
    }
    return l;
}
