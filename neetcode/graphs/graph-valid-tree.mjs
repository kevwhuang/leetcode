// 261 - Graph Valid Tree

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */

function validTree(n, edges) {
    function dfs(vert) {
        seen.add(vert);
        const neighbors = adj[vert];
        for (let i = 0; i < neighbors.length; i++) {
            if (seen.has(neighbors[i])) continue;
            dfs(neighbors[i]);
        }
    }
    if (edges.length !== n - 1) return false;
    const adj = Array.from({ length: n }, () => []);
    for (let i = 0; i < edges.length; i++) {
        const [v1, v2] = edges[i];
        adj[v1].push(v2);
        adj[v2].push(v1);
    }
    const seen = new Set();
    dfs(0);
    return seen.size === n;
}

module.exports = validTree;
