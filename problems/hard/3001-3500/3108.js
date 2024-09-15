// 3108 - Minimum Cost Walk in Weighted Graph

function minimumCost(n, edges, query) {
    const find = v => v === uf[v] ? v : uf[v] = find(uf[v]);
    const uf = Array.from({ length: n }, (_, i) => i);
    for (let i = 0; i < edges.length; i++) {
        uf[find(edges[i][0])] = find(edges[i][1]);
    }
    for (let i = 0; i < n; i++) {
        find(i);
    }
    const costs = {};
    for (let i = 0; i < edges.length; i++) {
        const u = uf[edges[i][0]], w = edges[i][2];
        costs[u] = (costs[u] ?? w) & w;
    }
    for (let i = 0; i < query.length; i++) {
        const u = uf[query[i][0]], v = uf[query[i][1]];
        query[i] = u === v ? costs[u] : -1;
    }
    return query;
}
