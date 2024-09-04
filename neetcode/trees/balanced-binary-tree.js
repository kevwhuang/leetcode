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
        const abs = Math.abs(left - right);
        return abs > 1 ? Infinity : Math.max(left, right) + 1;
    }
    return dfs(root) !== Infinity;
}

module.exports = isBalanced;
