// 3097 - Shortest Subarray With OR at Least K II

function minimumSubarrayLength(nums, k) {
    function alter(cur, delta) {
        let bit = 1;
        while (cur) {
            if (cur & 1) bits[len - bit] += delta;
            bit++;
            cur >>= 1;
        }
    }
    function special() {
        let cur = 0, mult = 1, i = len;
        while (--i >= 0) {
            if (bits[i]) cur += mult;
            mult *= 2;
        }
        return cur >= k;
    }
    function shrink() {
        while (true) {
            alter(nums[l++], -1);
            if (!special() || l === r) return;
        }
    }
    let len = 0, cur = k;
    while (cur) {
        len++;
        cur >>= 1;
    }
    const bits = new Uint32Array(len);
    let r = -1;
    while (++r < nums.length) {
        if (nums[r] >= k) return 1;
        alter(nums[r], 1);
        if (special()) break;
    }
    if (r === nums.length) return -1;
    let l = 0;
    shrink();
    while (++r < nums.length) {
        if (nums[r] >= k) return 1;
        alter(nums[r], 1);
        shrink();
    }
    return r - l + 1;
}
