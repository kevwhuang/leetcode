// 78 - Subsets

function subsets(nums) {
    function power(ite, cur = []) {
        if (!ite.length) return res.push(cur);
        power(ite.slice(1), cur);
        power(ite.slice(1), cur.concat(ite[0]));
    }
    const res = [];
    power(nums);
    return res;
}
