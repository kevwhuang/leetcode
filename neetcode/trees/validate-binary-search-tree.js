// 98 - Validate Binary Search Tree

/**
 * @param {TreeNode} root
 * @return {boolean}
 */

function isValidBST(root) {
    function dfs(node, min, max) {
        if (!node) return true;
        if (node.val <= min) return false;
        if (node.val >= max) return false;
        const left = dfs(node.left, min, node.val);
        const right = dfs(node.right, node.val, max);
        return left && right;
    }
    return dfs(root, -Infinity, Infinity);
}

module.exports = isValidBST;
