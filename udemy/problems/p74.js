// 74 - Graphs - BFS Exercise

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
    breadthFirstSearch(v) {
        const res = [];
        const visited = new Set([v]);
        const queue = [v];
        while (queue.length) {
            const node = queue.shift();
            res.push(node);
            const edges = this.adj[node];
            for (let i = 0, vert; i < edges.length; i++) {
                vert = edges[i];
                if (visited.has(vert)) continue;
                visited.add(vert);
                queue.push(vert);
            }
        }
        return res;
    }
}
