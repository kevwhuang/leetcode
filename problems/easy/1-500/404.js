// 404 - Sum of Left Leaves

function sumOfLeftLeaves(root) {
    function dfs(cur) {
        if (cur.left && !cur.left.left && !cur.left.right) {
            sum += cur.left.val;
        }
        cur.left && dfs(cur.left);
        cur.right && dfs(cur.right);
    }
    let sum = 0;
    dfs(root);
    return sum;
}
