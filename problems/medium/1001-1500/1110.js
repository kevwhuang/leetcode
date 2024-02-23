// 1110 - Delete Nodes and Return Forest

function delNodes(root, to_delete) {
    function dfs(node, isRoot) {
        if (!node) return;
        if (isRoot && !set.has(node.val)) forest.push(node);
        for (const child of children) {
            if (!node[child]) continue;
            if (set.has(node[child].val)) {
                dfs(node[child].left, true);
                dfs(node[child].right, true);
                node[child] = null;
            } else {
                dfs(node[child], set.has(node.val));
            }
        }
    }
    const forest = [];
    const children = ['left', 'right'];
    const set = new Set(to_delete);
    dfs(root, true);
    return forest;
}
