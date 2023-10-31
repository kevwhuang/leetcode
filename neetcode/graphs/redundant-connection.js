// 684 - Redundant Connection

/**
 * @param {number[][]} edges
 * @return {number[]}
 */

function findRedundantConnection(edges) {
    function union(n1, n2) {
        const p1 = find(n1);
        const p2 = find(n2);
        if (p1 === p2) return false;
        if (rank[p1] > rank[p2]) {
            parent[p2] = p1;
            rank[p1] += rank[p2];
        } else {
            parent[p1] = p2;
            rank[p2] += rank[p1];
        }
        return true;
    }
    function find(n) {
        let p = parent[n];
        while (p !== parent[p]) {
            parent[p] = parent[parent[p]];
            p = parent[p];
        }
        return p;
    }
    const parent = new Array(edges.length + 1).fill().map((_, i) => i);
    const rank = new Array(edges.length + 1).fill(1);
    for (let i = 0; i < edges.length; i++) {
        const [n1, n2] = edges[i];
        if (!union(n1, n2)) return [n1, n2];
    }
}

module.exports = findRedundantConnection;
