// 1469 - Find All the Lonely Nodes

function getLonelyNodes(root) {
    function dfs(cur) {
        cur.left && dfs(cur.left);
        cur.right && dfs(cur.right);
        cur.left && !cur.right && res.push(cur.left.val);
        cur.right && !cur.left && res.push(cur.right.val);
    }
    const res = [];
    dfs(root);
    return res;
}
