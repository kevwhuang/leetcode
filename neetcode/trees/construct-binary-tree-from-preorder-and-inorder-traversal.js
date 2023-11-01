// 105 - Construct Binary Tree From Preorder and Inorder Traversal

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

function buildTree(preorder, inorder) {
    function build(bound) {
        if (inorder[j] === bound) return null;
        const root = new TreeNode(preorder[i++]);
        root.left = build(root.val);
        j++;
        root.right = build(bound);
        return root;
    }
    let i = 0, j = 0;
    return build();
}

class TreeNode {
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

module.exports = buildTree;
