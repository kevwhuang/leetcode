// 1022 - Sum of Root to Leaf Binary Numbers

function sumRootToLeaf(root) {
    function dfs(cur, prev) {
        if (!cur) return;
        prev = prev << 1 | cur.val;
        if (!cur.left && !cur.right) sum += parseInt(prev, 10);
        dfs(cur.left, prev);
        dfs(cur.right, prev);
    }
    let sum = 0;
    dfs(root);
    return sum;
}
