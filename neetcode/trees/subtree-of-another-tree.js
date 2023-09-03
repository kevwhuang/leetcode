// 572 - Subtree of Another Tree

/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */

function isSubtree(root, subRoot) {
    function isSame(r1, r2) {
        if (!r1 && !r2) return true;
        if (!r1 || !r2 || r1.val !== r2.val) return false;
        return isSame(r1.left, r2.left) && isSame(r1.right, r2.right);
    }
    if (!root) return false;
    if (isSame(root, subRoot)) return true;
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}

module.exports = isSubtree;
