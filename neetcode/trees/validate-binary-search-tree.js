// 98 - Validate Binary Search Tree

/**
 * @param {TreeNode} root
 * @return {boolean}
 */

function isValidBST(root) {
    function dfs(cur) {
        if (!cur) return;
        if (prev === Infinity) return false;
        dfs(cur.left);
        if (cur.val <= prev) prev = Infinity;
        else prev = cur.val;
        dfs(cur.right);
    }
    let prev = -Infinity;
    dfs(root);
    return prev !== Infinity;
}

module.exports = isValidBST;
