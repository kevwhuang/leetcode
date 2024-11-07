// 104 - Maximum Depth of Binary Tree

/**
 * @param {TreeNode} root
 * @return {number}
 */

function maxDepth(root) {
    return root ? Math.max(maxDepth(root.left), maxDepth(root.right)) + 1 : 0;
}

module.exports = maxDepth;
