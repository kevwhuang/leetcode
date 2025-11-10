// 3741 - Minimum Distance Between Three Equal Elements II

function minimumDistance(nums) {
    let res = 200000, i = 0;
    const map1 = new Map(), map2 = new Map();
    while (i < nums.length) {
        const cur = nums[i++], a = map1.get(cur);
        if (!a && map1.set(cur, i)) continue;
        const b = map2.get(cur);
        if (map2.set(cur, i) && !b) continue;
        map1.set(cur, b);
        res = Math.min(2 * (i - a), res);
    }
    return res < 200000 ? res : -1;
}
