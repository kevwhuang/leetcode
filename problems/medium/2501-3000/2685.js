// 2685 - Count the Number of Complete Components

function countCompleteComponents(n, edges) {
    const adj = Array.from({ length: n }, () => []);
    for (let i = 0; i < edges.length; i++) {
        adj[edges[i][0]].push(edges[i][1]);
        adj[edges[i][1]].push(edges[i][0]);
    }
    let components = 0;
    const seen = new Set();
    for (let v = 0; v < n; v++) {
        if (seen.has(v)) continue;
        let queue = [v], nodeCount = 0, edgeCount = 0;
        while (queue.length) {
            const newQueue = [];
            for (let i = 0; i < queue.length; i++) {
                const vert = queue[i];
                if (seen.has(vert)) continue;
                seen.add(vert);
                nodeCount++;
                const neighbors = adj[vert];
                for (let j = 0; j < neighbors.length; j++) {
                    if (seen.has(neighbors[j])) continue;
                    newQueue.push(neighbors[j]);
                    edgeCount++;
                }
            }
            queue = newQueue;
        }
        if (nodeCount * (nodeCount - 1) / 2 === edgeCount) components++;
    }
    return components;
}
