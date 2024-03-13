// 226 - Invert Binary Tree

function invertTree(root) {
    if (!root) return root;
    const left = invertTree(root.left);
    const right = invertTree(root.right);
    root.left = right;
    root.right = left;
    return root;
}
