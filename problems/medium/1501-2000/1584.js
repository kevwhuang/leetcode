// 1584 - Min Cost to Connect All Points

function minCostConnectPoints(points) {
    let res = 0;
    const n = points.length;
    const seen = new Uint8Array(n);
    const costs = new Uint32Array(n + 1).fill(1e9);
    costs[0] = 0;
    for (let i = 0; i < n; i++) {
        let u = n;
        for (let v = 0; v < n; v++) {
            if (seen[v]) continue;
            if (costs[v] < costs[u]) u = v;
        }
        res += costs[u], seen[u] = 1;
        for (let v = 0; v < n; v++) {
            if (seen[v]) continue;
            const dx = Math.abs(points[u][0] - points[v][0]);
            const dy = Math.abs(points[u][1] - points[v][1]);
            costs[v] = Math.min(dx + dy, costs[v]);
        }
    }
    return res;
}
