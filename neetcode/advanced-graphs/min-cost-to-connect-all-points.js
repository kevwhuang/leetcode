// 1584 - Min Cost to Connect All Points

/**
 * @param {number[][]} points
 * @return {number}
 */

function minCostConnectPoints(points) {
    let res = 0;
    const n = points.length;
    const seen = new Uint8Array(n);
    const costs = new Array(n).fill(Infinity);
    costs[0] = 0;
    for (let i = 0; i < n; i++) {
        let u, min = Infinity;
        for (let v = 0; v < n; v++) {
            if (seen[v] || costs[v] >= min) continue;
            u = v, min = costs[u];
        }
        res += costs[u], seen[u] = 1;
        const x1 = points[u][0], y1 = points[u][1];
        for (let v = 0; v < n; v++) {
            if (seen[v]) continue;
            const x2 = points[v][0], y2 = points[v][1];
            const dist = Math.abs(x1 - x2) + Math.abs(y1 - y2);
            costs[v] = Math.min(dist, costs[v]);
        }
    }
    return res;
}

module.exports = minCostConnectPoints;
