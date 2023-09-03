// 257 - Binary Tree Paths

function binaryTreePaths(root) {
    function dfs(root, str) {
        if (!root) return;
        str = str ? `${str}->${root.val}` : `${root.val}`;
        !root.left && !root.right && paths.push(str);
        dfs(root.left, str);
        dfs(root.right, str);
    }
    const paths = [];
    dfs(root);
    return paths;
}
