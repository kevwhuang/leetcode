// 1448 - Count Good Nodes in Binary Tree

function goodNodes(root) {
    function dfs(node, max) {
        node.val >= max && good++;
        max = Math.max(node.val, max);
        node.left && dfs(node.left, max);
        node.right && dfs(node.right, max);
    }
    let good = 0;
    dfs(root, root.val);
    return good;
}
