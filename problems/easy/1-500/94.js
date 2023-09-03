// 94 - Binary Tree Inorder Traversal

function inorderTraversal(root) {
    function traverse(cur) {
        cur.left && traverse(cur.left);
        res.push(cur.val);
        cur.right && traverse(cur.right);
    }
    if (!root) return [];
    const res = [];
    traverse(root);
    return res;
}
