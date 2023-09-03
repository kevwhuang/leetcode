// 145 - Binary Tree Postorder Traversal

function postorderTraversal(root) {
    function traverse(cur) {
        cur.left && traverse(cur.left);
        cur.right && traverse(cur.right);
        res.push(cur.val);
    }
    if (!root) return [];
    const res = [];
    traverse(root);
    return res;
}
