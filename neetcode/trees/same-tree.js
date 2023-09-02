// 100 - Same Tree

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

function isSameTree(p, q) {
    if (!p && !q) return true;
    if (!p || !q || p.val !== q.val) return false;
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

module.exports = isSameTree;
