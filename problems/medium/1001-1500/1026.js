// 1026 - Maximum Difference Between Node and Ancestor

function maxAncestorDiff(root) {
    function dfs(node, min, max) {
        if (!node) return;
        diff = Math.max(Math.abs(node.val - min), Math.abs(node.val - max), diff);
        dfs(node.left, Math.min(node.val, min), Math.max(node.val, max));
        dfs(node.right, Math.min(node.val, min), Math.max(node.val, max));
    }
    let diff = 0;
    dfs(root, root.val, root.val);
    return diff;
}
