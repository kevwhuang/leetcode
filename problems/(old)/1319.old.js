// 1319 - Number of Operations to Make Network Connected

function makeConnected(n, connections) {
    if (n - 1 > connections.length) return -1;
    const adj = Array.from({ length: n }, () => []);
    for (let i = 0; i < connections.length; i++) {
        adj[connections[i][0]].push(connections[i][1]);
        adj[connections[i][1]].push(connections[i][0]);
    }
    let components = 0;
    const seen = new Set();
    for (let v = 0; v < n; v++) {
        if (seen.has(v)) continue;
        components++;
        let queue = [v];
        while (queue.length) {
            const newQueue = [];
            for (let i = 0; i < queue.length; i++) {
                const vert = queue[i];
                if (seen.has(vert)) continue;
                seen.add(vert);
                const neighbors = adj[vert];
                for (let j = 0; j < neighbors.length; j++) {
                    if (seen.has(neighbors[j])) continue;
                    newQueue.push(neighbors[j]);
                }
            }
            queue = newQueue;
        }
    }
    return components - 1;
}
