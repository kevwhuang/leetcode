// 105 - Construct Binary Tree From Preorder and Inorder Traversal

function buildTree(preorder, inorder) {
    function dfs(cur) {
        if (inorder[j] === cur) return null;
        return new TreeNode(preorder[i], dfs(preorder[i++]), dfs(cur, j++));
    }
    let i = 0, j = 0;
    return dfs();
}
