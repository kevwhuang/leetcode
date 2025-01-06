// 2204 - Distance to a Cycle in Undirected Graph

function distanceToCycle(n, edges) {
    const adj = Array.from({ length: n }, () => []);
    const deg = new Uint32Array(n);
    for (let i = 0; i < edges.length; i++) {
        const u = edges[i][0], v = edges[i][1];
        adj[u].push(v) && adj[v].push(u);
        ++deg[u], ++deg[v];
    }
    let queue = [];
    for (let v = 0; v < n; v++) {
        if (deg[v] === 1) queue.push(v);
    }
    while (queue.length) {
        const nextQueue = [];
        for (let i = 0; i < queue.length; i++) {
            --deg[queue[i]];
            const next = adj[queue[i]];
            for (let j = 0; j < next.length; j++) {
                const v = next[j];
                if (deg[v] === 0) continue;
                if (--deg[v] === 1) nextQueue.push(v);
            }
        }
        queue = nextQueue;
    }
    for (let v = 0; v < n; v++) {
        if (deg[v]) queue.push(v);
    }
    const res = new Uint32Array(n);
    let acc = 1;
    while (queue.length) {
        const nextQueue = [];
        for (let i = 0; i < queue.length; i++) {
            const next = adj[queue[i]];
            for (let j = 0; j < next.length; j++) {
                const v = next[j];
                if (res[v] || deg[v]) continue;
                res[v] = acc;
                nextQueue.push(v);
            }
        }
        acc++, queue = nextQueue;
    }
    return res;
}
