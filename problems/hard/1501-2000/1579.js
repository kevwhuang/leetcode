// 1579 - Remove Max Number of Edges to Keep Graph Fully Traversable

function maxNumEdgesToRemove(n, edges) {
    function union(uf, u, v) {
        const p1 = find(uf, u);
        const p2 = find(uf, v);
        return p1 !== p2 && (uf[p1] = p2);
    }
    function find(uf, v) {
        while (v !== uf[v]) {
            uf[v] = uf[uf[v]];
            v = uf[v];
        }
        return v;
    }
    const ufAlice = Array.from({ length: n + 1 }, (_, i) => i);
    const ufBob = [...ufAlice];
    ufAlice[0] = ufBob[0] = n;
    let count = 0;
    for (let i = 0; i < edges.length; i++) {
        const u = edges[i][1], v = edges[i][2];
        edges[i][0] === 3
            && union(ufAlice, u, v) && ufAlice[0]--
            && union(ufBob, u, v) && ufBob[0]--
            && count++;
    }
    for (let i = 0; i < edges.length; i++) {
        const u = edges[i][1], v = edges[i][2];
        edges[i][0] === 1
            && union(ufAlice, u, v) && ufAlice[0]--
            && count++;
        edges[i][0] === 2
            && union(ufBob, u, v) && ufBob[0]--
            && count++;
    }
    return ufAlice[0] === 1 && ufBob[0] === 1 ? edges.length - count : -1;
}
