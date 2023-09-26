// 230 - Kth Smallest Element in a BST

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */

function kthSmallest(root, k) {
    function dfs(node) {
        if (!node || !k) return;
        node.left && dfs(node.left);
        if (!--k) res = node.val;
        node.right && dfs(node.right);
    }
    let res;
    dfs(root);
    return res;
}

module.exports = kthSmallest;
