// 124 - Binary Tree Maximum Path Sum

/**
 * @param {TreeNode} root
 * @return {number}
 */

function maxPathSum(root) {
    function dfs(node) {
        if (!node) return 0;
        const cur = node.val;
        const left = dfs(node.left) + cur;
        const right = dfs(node.right) + cur;
        res = Math.max(left, right, cur, left + right - cur, res);
        return Math.max(left, right, cur);
    }
    let res = -Infinity;
    dfs(root);
    return res;
}

module.exports = maxPathSum;
