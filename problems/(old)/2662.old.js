// 2662 - Minimum Cost of a Path With Special Roads

function minimumCost(start, target, specialRoads) {
    const dist = (x1, y1, x2, y2) => Math.abs(x2 - x1) + Math.abs(y2 - y1);
    const startStr = start.join('-');
    const targetStr = target.join('-');
    const adj = { [startStr]: [[targetStr, dist(...start, ...target)]] };
    for (let i = 0; i < specialRoads.length; i++) {
        const node1 = specialRoads[i].slice(0, 2);
        const node2 = specialRoads[i].slice(2, 4);
        const node1Str = node1.join('-');
        const node2Str = node2.join('-');
        adj[startStr].push([node1Str, dist(...start, ...node1)]);
        adj[node1Str] ??= [];
        adj[node1Str].push([node2Str, specialRoads[i][4]]);
        adj[node2Str] ??= [];
        adj[node2Str].push([targetStr, dist(...node2, ...target)]);
        for (let j = 0; j < specialRoads.length; j++) {
            if (i === j) continue;
            const node3 = specialRoads[j].slice(0, 2);
            const node3Str = node3.join('-');
            adj[node2Str].push([node3Str, dist(...node2, ...node3)]);
        }
    }
    const costs = { [startStr]: 0 };
    const pq = new PriorityQueue({ compare: (a, b) => a[1] - b[1] });
    pq.enqueue([startStr, 0]);
    while (true) {
        const [u, cost] = pq.dequeue();
        if (u === targetStr) return costs[u];
        const neighbors = adj[u];
        for (let i = 0; i < neighbors.length; i++) {
            const v = neighbors[i][0];
            const nextCost = neighbors[i][1] + cost;
            if (nextCost >= costs[v]) continue;
            costs[v] = nextCost;
            pq.enqueue([v, nextCost]);
        }
    }
}
