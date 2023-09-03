// 144 - Binary Tree Preorder Traversal

function preorderTraversal(root) {
    function traverse(cur) {
        res.push(cur.val);
        cur.left && traverse(cur.left);
        cur.right && traverse(cur.right);
    }
    if (!root) return [];
    const res = [];
    traverse(root);
    return res;
}
