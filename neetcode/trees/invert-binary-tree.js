// 226 - Invert Binary Tree

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

function invertTree(root) {
    if (!root) return root;
    const left = invertTree(root.left);
    const right = invertTree(root.right);
    root.left = right;
    root.right = left;
    return root;
}

module.exports = invertTree;
