// 1584 - Min Cost to Connect All Points

function minCostConnectPoints(points) {
    let min = 0;
    const len = points.length;
    const seen = new Set();
    const costs = new Array(len).fill(Infinity);
    costs[0] = 0;
    for (let i = 0; i < len; i++) {
        let u, localMin = Infinity;
        for (let v = 0; v < len; v++) {
            if (seen.has(v) || costs[v] >= localMin) continue;
            u = v;
            localMin = costs[v];
        }
        seen.add(u);
        min += costs[u];
        for (let v = 0; v < len; v++) {
            if (seen.has(v)) continue;
            let manhattan = Math.abs(points[v][0] - points[u][0]);
            manhattan += Math.abs(points[v][1] - points[u][1]);
            costs[v] = Math.min(manhattan, costs[v]);
        }
    }
    return min;
}
