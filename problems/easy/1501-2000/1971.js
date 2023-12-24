// 1971 - Find If Path Exists in Graph

function validPath(n, edges, source, destination) {
    function union(v1, v2) {
        const p1 = find(v1);
        const p2 = find(v2);
        if (p1 !== p2) uf[p1] = p2;
    }
    function find(v) {
        while (v !== uf[v]) {
            uf[v] = uf[uf[v]];
            v = uf[v];
        }
        return v;
    }
    const uf = new Array(n);
    for (let i = 0; i < n; i++) {
        uf[i] = i;
    }
    for (let i = 0; i < edges.length; i++) {
        union(edges[i][0], edges[i][1]);
    }
    return find(source) === find(destination);
}
