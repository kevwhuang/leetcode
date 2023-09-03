// 2331 - Evaluate Boolean Binary Tree

function evaluateTree(root) {
    function dfs(cur) {
        if (!cur) return;
        if (cur.val === 0) return false;
        if (cur.val === 1) return true;
        const left = dfs(cur.left);
        const right = dfs(cur.right);
        return cur.val === 2 ? left || right : left && right;
    }
    return dfs(root);
}
