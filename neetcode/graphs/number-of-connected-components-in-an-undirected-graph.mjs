// 323 - Number of Connected Components in an Undirected Graph

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */

function countComponents(n, edges) {
    function traverse(vert) {
        seen.add(vert);
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
    let components = n - adj.size;
    const seen = new Set();
    for (const vert of adj.keys()) {
        if (seen.has(vert)) continue;
        components++;
        traverse(vert);
    }
    return components;
}

module.exports = countComponents;
