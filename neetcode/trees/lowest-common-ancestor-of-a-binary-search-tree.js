// 235 - Lowest Common Ancestor of a Binary Search Tree

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

function lowestCommonAncestor(root, p, q) {
    while (true) {
        const val = root.val;
        if (val > p.val && val > q.val) root = root.left;
        else if (val < p.val && val < q.val) root = root.right;
        else return root;
    }
}

module.exports = lowestCommonAncestor;
