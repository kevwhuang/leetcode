// 105 - Construct Binary Tree From Preorder and Inorder Traversal

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

function buildTree(preorder, inorder) {
    function dfs(cur) {
        if (inorder[j] === cur) return null;
        return new TreeNode(preorder[i], dfs(preorder[i++]), dfs(cur, j++));
    }
    let i = 0, j = 0;
    return dfs();
}

class TreeNode {
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

module.exports = buildTree;
