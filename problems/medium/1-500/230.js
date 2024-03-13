// 230 - Kth Smallest Element in a BST

function kthSmallest(root, k) {
    function dfs(node) {
        if (!node || !k) return;
        dfs(node.left);
        if (!--k) smallest = node.val;
        dfs(node.right);
    }
    let smallest;
    dfs(root);
    return smallest;
}
