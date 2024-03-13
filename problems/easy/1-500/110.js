// 110 - Balanced Binary Tree

function isBalanced(root) {
    function dfs(cur) {
        if (!cur) return 0;
        const left = dfs(cur.left);
        const right = dfs(cur.right);
        return Math.abs(left - right) > 1 ? Infinity : Math.max(left, right) + 1;
    }
    return dfs(root) !== Infinity;
}
