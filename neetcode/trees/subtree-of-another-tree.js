// 572 - Subtree of Another Tree

/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */

function isSubtree(root, subRoot) {
    function dfs(q, r) {
        if (!q && !r) return true;
        if (!q || !r || q.val !== r.val) return false;
        return dfs(q.left, r.left) && dfs(q.right, r.right);
    }
    if (!root) return false;
    if (dfs(root, subRoot)) return true;
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}

module.exports = isSubtree;
