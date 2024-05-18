// 2642 - Design Graph With Shortest Path Calculator

class Graph {
    constructor(n, edges) {
        this.comparator = (a, b) => a[1] - b[1];
        this.adj = {};
        for (let i = 0; i < edges.length; i++) {
            this.addEdge(edges[i]);
        }
    }
    addEdge(edge) {
        this.adj[edge[0]] ??= [];
        this.adj[edge[0]].push(edge.slice(1));
    }
    shortestPath(node1, node2) {
        const costs = { [node1]: 0 };
        const pq = new PriorityQueue({ compare: this.comparator });
        pq.enqueue([node1, 0]);
        while (pq.size()) {
            const [u, cost] = pq.dequeue();
            if (u === node2) return costs[u];
            const neighbors = this.adj[u];
            if (!neighbors) continue;
            for (let i = 0; i < neighbors.length; i++) {
                const v = neighbors[i][0];
                const nextCost = neighbors[i][1] + cost;
                if (nextCost >= costs[v]) continue;
                costs[v] = nextCost;
                pq.enqueue([v, nextCost]);
            }
        }
        return -1;
    }
}
