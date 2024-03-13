// 1448 - Count Good Nodes in Binary Tree

function goodNodes(root) {
    function dfs(node, max) {
        if (node.val >= max) good++;
        max = Math.max(node.val, max);
        if (node.left) dfs(node.left, max);
        if (node.right) dfs(node.right, max);
    }
    let good = 0;
    dfs(root, root.val);
    return good;
}
