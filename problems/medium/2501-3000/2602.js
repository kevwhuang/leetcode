// 2602 - Minimum Operations to Make All Array Elements Equal

function minOperations(nums, queries) {
    nums.sort((a, b) => a - b);
    const len = nums.length;
    const pf = new Array(len);
    pf[0] = nums[0];
    for (let i = 1; i < len; i++) {
        pf[i] = pf[i - 1] + nums[i];
    }
    const sum = pf[pf.length - 1];
    for (let i = 0; i < queries.length; i++) {
        let l = 0, r = len - 1;
        while (l < r) {
            const m = l + r >> 1;
            if (nums[m] < queries[i]) l = m + 1;
            else r = m;
        }
        if (nums[l] < queries[i]) l++;
        queries[i] = sum + queries[i] * (l + l - len);
        if (l) queries[i] -= 2 * pf[l - 1];
    }
    return queries;
}
