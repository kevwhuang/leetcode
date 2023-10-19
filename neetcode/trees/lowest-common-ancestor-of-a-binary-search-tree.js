// 235 - Lowest Common Ancestor of a Binary Search Tree

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

function lowestCommonAncestor(root, p, q) {
    while (true) {
        if (root.val < p.val && root.val < q.val) root = root.right;
        else if (root.val > p.val && root.val > q.val) root = root.left;
        else return root;
    }
}

module.exports = lowestCommonAncestor;
