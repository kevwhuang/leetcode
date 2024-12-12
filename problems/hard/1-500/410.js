// 410 - Split Array Largest Sum

function splitArray(nums, k) {
    let l = Math.max(...nums), r = nums.length * l / k;
    while (l < r) {
        let cnt = 1, acc = 0;
        const m = l + r >> 1;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] + acc > m && cnt++) acc = 0;
            acc += nums[i];
        }
        if (cnt <= k) r = m;
        else l = m + 1;
    }
    return r;
}
