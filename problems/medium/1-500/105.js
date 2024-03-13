// 105 - Construct Binary Tree From Preorder and Inorder Traversal

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
