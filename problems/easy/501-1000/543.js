// 543 - Diameter of Binary Tree

function diameterOfBinaryTree(root) {
    function dfs(cur) {
        if (!cur) return 0;
        const left = dfs(cur.left);
        const right = dfs(cur.right);
        diameter = Math.max(left + right, diameter);
        return Math.max(left, right) + 1;
    }
    let diameter = 0;
    dfs(root);
    return diameter;
}
