// 133 - Clone Graph

function cloneGraph(node) {
    function dfs(node) {
        const val = node.val;
        if (!graph.has(val)) {
            graph.set(val, new Node(val));
            graph.get(val).neighbors = node.neighbors.map(dfs);
        }
        return graph.get(val);
    }
    if (!node) return null;
    const graph = new Map();
    return dfs(node);
}
