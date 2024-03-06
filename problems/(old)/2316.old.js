// 2316 - Count Unreachable Pairs of Nodes in an Undirected Graph

function countPairs(n, edges) {
    function traverse(vert) {
        seen.add(vert);
        componentSize++;
        const edges = adj.get(vert);
        for (let i = 0; i < edges.length; i++) {
            if (seen.has(edges[i])) continue;
            traverse(edges[i]);
        }
    }
    const adj = new Map();
    for (let i = 0; i < edges.length; i++) {
        const [v1, v2] = edges[i];
        if (!adj.has(v1)) adj.set(v1, []);
        if (!adj.has(v2)) adj.set(v2, []);
        adj.get(v1).push(v2);
        adj.get(v2).push(v1);
    }
    const seen = new Set();
    const sizes = [];
    let componentSize;
    for (const vert of adj.keys()) {
        if (seen.has(vert)) continue;
        componentSize = 0;
        traverse(vert);
        sizes.push(componentSize);
    }
    let unreachablePairs = 0, connectedCount = 0;
    for (let i = 0; i < sizes.length; i++) {
        connectedCount += sizes[i];
        for (let j = i + 1; j < sizes.length; j++)
            unreachablePairs += sizes[i] * sizes[j];
    }
    const disconnectedCount = n - seen.size;
    unreachablePairs += connectedCount * disconnectedCount;
    unreachablePairs += disconnectedCount * (disconnectedCount - 1) / 2;
    return unreachablePairs;
}
