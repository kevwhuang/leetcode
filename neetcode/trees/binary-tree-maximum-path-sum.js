// 124 - Binary Tree Maximum Path Sum

/**
 * @param {TreeNode} root
 * @return {number}
 */

function maxPathSum(root) {
    function dfs(node) {
        if (!node) return 0;
        const left = dfs(node.left) + node.val;
        const right = dfs(node.right) + node.val;
        const both = left + right - node.val;
        max = Math.max(node.val, left, right, both, max);
        return Math.max(node.val, left, right);
    }
    let max = -1000;
    dfs(root);
    return max;
}

module.exports = maxPathSum;
