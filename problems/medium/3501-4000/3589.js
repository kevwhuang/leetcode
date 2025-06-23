// 3589 - Count Prime-Gap Balanced Subarrays

function primeSubarray(nums, k) {
    function init() {
        dict = new Uint8Array(50001), dict[1] = 1;
        for (let i = 2; i < 50001; i++) {
            if (dict[i]) continue;
            for (let j = i * i; j < 50001; j += i) {
                dict[j] = 1;
            }
        }
    }
    if (!this.dict) init();
    let res = 0, l = 0, r = -1, i, j;
    const arr = [];
    while (++r < nums.length) {
        if (dict[nums[r]] === 0) {
            let ll = 0, rr = arr.length - 1;
            const tgt = nums[r];
            while (ll <= rr) {
                const m = ll + rr >> 1;
                if (arr[m] < tgt) ll = m + 1;
                else rr = m - 1;
            }
            arr.splice(ll, 0, tgt);
            i = j, j = r;
        }
        while (arr.length && arr.at(-1) - arr[0] > k) {
            if (dict[nums[l++]]) continue;
            let ll = 0, rr = arr.length - 1;
            const tgt = nums[l - 1];
            while (ll <= rr) {
                const m = ll + rr >> 1;
                if (arr[m] < tgt) ll = m + 1;
                else if (arr[m] > tgt) rr = m - 1;
                else if (arr.splice(m, 1)) break;
            }
        }
        if (arr.length > 1) res += i - l + 1;
    }
    return res;
}
