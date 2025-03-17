// 3488 - Closest Equal Element Queries

function solveQueries(nums, queries) {
    const map = new Map(), m = nums.length;
    for (let i = 0; i < m; i++) {
        if (!map.has(nums[i])) map.set(nums[i], []);
        map.get(nums[i]).push(i);
    }
    for (let i = 0; i < queries.length; i++) {
        const tgt = queries[i];
        const arr = map.get(nums[tgt]), n = arr.length;
        if (n === 1 && (queries[i] = -1)) continue;
        let l = 0, r = arr.length - 1;
        while (l <= r) {
            const m = l + r >> 1;
            if (arr[m] < tgt) l = m + 1;
            else if (arr[m] > tgt) r = m - 1;
            else l = m, r = -1;
        }
        const a = l ? arr[l] - arr[l - 1] : arr[l] - arr[n - 1] + m;
        const b = l + 1 < n ? arr[l + 1] - arr[l] : arr[0] - arr[l] + m;
        queries[i] = Math.min(a, b);
    }
    return queries;
}
