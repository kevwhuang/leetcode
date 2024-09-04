// 543 - Diameter of Binary Tree

function diameterOfBinaryTree(root) {
    function dfs(node) {
        if (!node) return 0;
        const left = dfs(node.left);
        const right = dfs(node.right);
        diameter = Math.max(left + right, diameter);
        return Math.max(left, right) + 1;
    }
    let diameter = 0;
    dfs(root);
    return diameter;
}
