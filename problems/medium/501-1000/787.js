// 787 - Cheapest Flights Within K Stops

function findCheapestPrice(n, flights, src, dst, k) {
    const adj = {};
    for (let i = 0; i < flights.length; i++) {
        const v = flights[i][0];
        adj[v] ??= new Uint16Array(n);
        adj[v][flights[i][1]] = flights[i][2];
    }
    if (!adj[src]) return -1;
    const M = new Uint32Array(n).fill(1e9);
    let queue = [[0, adj[src]]];
    while (~k-- && queue.length) {
        const nextQueue = [];
        for (let i = 0; i < queue.length; i++) {
            const cost = queue[i][0], costs = queue[i][1];
            for (let v = 0; v < n; v++) {
                if (costs[v] === 0) continue;
                const nextCost = cost + costs[v];
                if (nextCost >= M[v]) continue;
                M[v] = nextCost;
                if (adj[v]) nextQueue.push([nextCost, adj[v]]);
            }
        }
        queue = nextQueue;
    }
    return M[dst] === 1e9 ? -1 : M[dst];
}
