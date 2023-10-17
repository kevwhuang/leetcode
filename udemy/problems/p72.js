// 72 - Graphs - DFS Exercise

class Graph {
    constructor() {
        this.adj = {};
    }
    addEdge(v1, v2) {
        this.adj[v1].push(v2);
        this.adj[v2].push(v1);
    }
    addVertex(v) {
        this.adj[v] = [];
    }
    depthFirstSearch(v) {
        function traverse(vert) {
            res.push(vert);
            visited.add(vert);
            const edges = adj[vert];
            for (let i = 0; i < edges.length; i++) {
                !visited.has(edges[i]) && traverse(edges[i]);
            }
        }
        const res = [];
        const visited = new Set();
        const adj = this.adj;
        traverse(v);
        return res;
    }
}
