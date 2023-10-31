// 261 - Graph Valid Tree

function validTree(n, edges) {
    function dfs(vert) {
        if (isCycle) return;
        seen.add(vert);
        const edges = adj.get(vert);
        for (let i = 0; i < edges.length; i++) {
            const neighbor = edges[i];
            if (seen.has(neighbor)) {
                if (parents.get(vert) !== neighbor) return isCycle = true;
                continue;
            }
            parents.set(neighbor, vert);
            dfs(neighbor);
        }
    }
    if (n === 1) return true;
    const adj = new Map();
    for (let i = 0; i < edges.length; i++) {
        const [v1, v2] = edges[i];
        if (!adj.has(v1)) adj.set(v1, []);
        if (!adj.has(v2)) adj.set(v2, []);
        adj.get(v1).push(v2);
        adj.get(v2).push(v1);
    }
    if (adj.size !== n) return false;
    const seen = new Set();
    const parents = new Map();
    let isCycle = false;
    dfs(0);
    return isCycle ? false : seen.size === n;
}
