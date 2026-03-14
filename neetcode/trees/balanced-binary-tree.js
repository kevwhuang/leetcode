// 110 - Balanced Binary Tree

/**
 * @param {TreeNode} root
 * @return {boolean}
 */

function isBalanced(root) {
    function dfs(node) {
        if (!node) return 0;
        const left = dfs(node.left);
        const right = dfs(node.right);
        if (left === -1 || right === -1) return -1;
        if (Math.abs(left - right) > 1) return -1;
        return Math.max(left, right) + 1;
    }
    return ~dfs(root);
}

module.exports = isBalanced;
