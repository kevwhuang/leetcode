// 104 - Maximum Depth of Binary Tree

/**
 * @param {TreeNode} root
 * @return {number}
 */

function maxDepth(root) {
    if (!root) return 0;
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}

module.exports = maxDepth;
