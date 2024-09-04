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
        const seen = new Set([v]);
        let queue = [v];
        while (queue.length) {
            const nextQueue = [];
            for (let i = 0; i < queue.length; i++) {
                const vert = queue[i];
                res.push(vert);
                const edges = this.adj[vert];
                for (let j = 0; j < edges.length; j++) {
                    const neighbor = edges[j];
                    if (seen.has(neighbor)) continue;
                    seen.add(neighbor);
                    nextQueue.push(neighbor);
                }
            }
            queue = nextQueue;
        }
        return res;
    }
}
