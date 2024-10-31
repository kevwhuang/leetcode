// 347 - Top K Frequent Elements

function topKFrequent(nums, k) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], (map.get(nums[i]) ?? 0) + 1);
    }
    const bucket = [];
    for (const e of map) {
        bucket[e[1]] ??= [];
        bucket[e[1]].push(e[0]);
    }
    const res = new Int16Array(k);
    let i = 0, j = bucket.length - 1;
    while (i < k) {
        while (j && !bucket[j]) j--;
        bucket[j--].forEach(e => res[i++] = e);
    }
    return res;
}
