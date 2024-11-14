// 98 - Validate Binary Search Tree

function isValidBST(root) {
    function dfs(node, min, max) {
        if (!node) return true;
        const val = node.val;
        if (val <= min || val >= max) return false;
        return dfs(node.left, min, val) && dfs(node.right, val, max);
    }
    return dfs(root, -Infinity, Infinity);
}
