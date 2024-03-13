// 90 - Subsets II

function subsetsWithDup(nums) {
    function power(ite, cur = []) {
        if (!ite.length) return set.add(String(cur));
        power(ite.slice(1), cur);
        power(ite.slice(1), cur.concat(ite[0]));
    }
    const set = new Set();
    power(nums.sort((a, b) => a - b));
    set.delete('');
    const res = [[]];
    for (const e of set) {
        const cur = e.split(',');
        for (let i = 0; i < cur.length; i++) {
            cur[i] = Number(cur[i]);
        }
        res.push(cur);
    }
    return res;
}
