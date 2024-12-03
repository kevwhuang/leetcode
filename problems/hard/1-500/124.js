// 124 - Binary Tree Maximum Path Sum

function maxPathSum(root) {
    function dfs(node) {
        if (!node) return 0;
        const left = dfs(node.left) + node.val;
        const right = dfs(node.right) + node.val;
        const sum = left + right - node.val;
        max = Math.max(left, right, node.val, sum, max);
        return Math.max(left, right, node.val);
    }
    let max = -Infinity;
    dfs(root);
    return max;
}
