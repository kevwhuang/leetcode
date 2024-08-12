// 3249 - Count the Number of Good Nodes

function countGoodNodes(edges) {
    function dfs(node, prev) {
        let count = 1, target;
        const neighbors = adj[node];
        for (let i = 0; i < neighbors.length; i++) {
            if (neighbors[i] === prev) continue;
            const subcount = dfs(neighbors[i], node);
            count += subcount;
            if (target === false) continue;
            if (target === undefined) target = subcount;
            else if (target !== subcount) target = false;
        }
        if (target !== false) good++;
        return count;
    }
    const adj = Array.from({ length: edges.length + 1 }, () => []);
    for (let i = 0; i < edges.length; i++) {
        adj[edges[i][0]].push(edges[i][1]);
        adj[edges[i][1]].push(edges[i][0]);
    }
    let good = 0;
    dfs(0, -1);
    return good;
}
