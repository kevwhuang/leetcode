// 2204 - Distance to a Cycle in Undirected Graph

function distanceToCycle(n, edges) {
    const adj = Array.from({ length: n }, () => []);
    const indegree = new Uint32Array(n);
    for (let i = 0; i < edges.length; i++) {
        const u = edges[i][0], v = edges[i][1];
        adj[u].push(v) && adj[v].push(u);
        ++indegree[u] && ++indegree[v];
    }
    let queue = [];
    for (let v = 0; v < n; v++) {
        if (indegree[v] === 1) queue.push(v);
    }
    while (queue.length) {
        const nextQueue = [];
        for (let i = 0; i < queue.length; i++) {
            --indegree[queue[i]];
            const next = adj[queue[i]];
            for (let j = 0; j < next.length; j++) {
                const v = next[j];
                if (indegree[v] === 0) continue;
                if (--indegree[v] === 1) nextQueue.push(v);
            }
        }
        queue = nextQueue;
    }
    for (let v = 0; v < n; v++) {
        if (indegree[v]) queue.push(v);
    }
    const res = new Uint32Array(n);
    let dist = 1;
    while (queue.length) {
        const nextQueue = [];
        for (let i = 0; i < queue.length; i++) {
            const next = adj[queue[i]];
            for (let j = 0; j < next.length; j++) {
                const v = next[j];
                if (res[v] || indegree[v]) continue;
                res[v] = dist;
                nextQueue.push(v);
            }
        }
        dist++, queue = nextQueue;
    }
    return res;
}
