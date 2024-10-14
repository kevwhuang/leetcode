// 272 - Closest Binary Search Tree Value II

function closestKValues(root, target, k) {
    function dfs(node) {
        if (node.left) dfs(node.left);
        vals.push(node.val);
        if (node.right) dfs(node.right);
    }
    const vals = [];
    dfs(root);
    let l = 0, r = vals.length - 1;
    while (l <= r) {
        const m = l + r >> 1;
        if (vals[m] < target) l = m + 1;
        else r = m - 1;
    }
    l = r++;
    const res = new Uint32Array(k);
    for (let i = 0; i < k; i++) {
        const abs1 = ~l ? Math.abs(target - vals[l]) : 1e10;
        const abs2 = r < vals.length ? Math.abs(target - vals[r]) : 1e10;
        res[i] = abs1 < abs2 ? vals[l--] : vals[r++];
    }
    return res;
}
