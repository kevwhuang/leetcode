// 1579 - Remove Max Number of Edges to Keep Graph Fully Traversable

function maxNumEdgesToRemove(n, edges) {
    function union(u, v, uf) {
        const p1 = find(u, uf), p2 = find(v, uf);
        return p1 !== p2 && (uf[p1] = p2);
    }
    const find = (v, uf) => v === uf[v] ? v : uf[v] = find(uf[v], uf);
    const uf1 = Array.from({ length: n + 1 }, (_, i) => i);
    const uf2 = [...uf1];
    uf1[0] = uf2[0] = n;
    let acc = 0;
    for (let i = 0; i < edges.length; i++) {
        const u = edges[i][1], v = edges[i][2];
        edges[i][0] === 3
            && union(u, v, uf1) && uf1[0]--
            && union(u, v, uf2) && uf2[0]--
            && acc++;
    }
    for (let i = 0; i < edges.length; i++) {
        const u = edges[i][1], v = edges[i][2];
        edges[i][0] === 1
            && union(u, v, uf1) && uf1[0]--
            && acc++;
        edges[i][0] === 2
            && union(u, v, uf2) && uf2[0]--
            && acc++;
    }
    return uf1[0] === 1 && uf2[0] === 1 ? edges.length - acc : -1;
}
