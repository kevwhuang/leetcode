// 1971 - Find If Path Exists in Graph

function validPath(n, edges, source, destination) {
    if (source === destination) return true;
    const graph = new Map();
    for (let i = 0, v1, v2; i < edges.length; i++) {
        v1 = edges[i][0];
        v2 = edges[i][1];
        graph.has(v1) ? graph.get(v1).add(v2) : graph.set(v1, new Set([v2]));
        graph.has(v2) ? graph.get(v2).add(v1) : graph.set(v2, new Set([v1]));
    }
    const seen = new Set();
    const queue = [source];
    while (queue.length) {
        for (const vert of graph.get(queue[0])) {
            if (seen.has(vert)) continue;
            seen.add(vert);
            if (seen.has(destination)) return true;
            queue.push(vert);
        }
        queue.shift();
    }
    return false;
}
