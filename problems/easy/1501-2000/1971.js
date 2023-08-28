// 1971 - Find If Path Exists in Graph

function validPath(n, edges, source, destination) {
    function union(v1, v2) {
        const root1 = find(v1);
        const root2 = find(v2);
        if (root1 !== root2) parent[root1] = root2;
    }
    function find(v) {
        while (v !== parent[v]) {
            parent[v] = parent[parent[v]];
            v = parent[v];
        }
        return v;
    }
    const parent = new Array(n);
    for (let i = 0; i < n; i++) {
        parent[i] = i;
    }
    for (let i = 0; i < edges.length; i++) {
        union(edges[i][0], edges[i][1]);
    }
    return find(source) === find(destination);
}
