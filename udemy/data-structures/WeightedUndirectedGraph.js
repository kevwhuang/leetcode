class WeightedUndirectedGraph {
    constructor() {
        this.adj = {};
    }
    dijkstra(v1, v2) {
        if (!this.adj[v1] || !this.adj[v2]) return false;
        const prev = {};
        const costs = {};
        for (const v in this.adj) {
            prev[v] = null;
            costs[v] = Infinity;
        }
        costs[v1] = 0;
        const pq = new (require('./MinPriorityQueue'));
        while (v1 !== v2) {
            const neighbors = this.adj[v1];
            for (let i = 0; i < neighbors.length; i++) {
                const neighbor = neighbors[i][0];
                const newCost = neighbors[i][1] + costs[v1];
                if (newCost >= costs[neighbor]) continue;
                prev[neighbor] = v1;
                costs[neighbor] = newCost;
                pq.enqueue(neighbor, newCost);
            }
            v1 = pq.dequeue()[0];
        }
        const path = [];
        while (v2) {
            path.push(v2);
            v2 = prev[v2];
        }
        return path.reverse();
    }
    insertEdge(v1, v2, weight) {
        if (!this.adj[v1] || !this.adj[v2] || isNaN(weight)) return false;
        this.adj[v1].push([v2, weight]);
        this.adj[v2].push([v1, weight]);
        return this;
    }
    insertVertex(v) {
        if (this.adj[v]) return false;
        this.adj[v] = [];
        return this;
    }
    removeEdge(v1, v2) {
        if (!this.adj[v1] || !this.adj[v2]) return false;
        this.adj[v1] = this.adj[v1].filter(v => v[0] !== v2);
        this.adj[v2] = this.adj[v2].filter(v => v[0] !== v1);
        return this;
    }
    removeVertex(v) {
        if (!this.adj[v]) return false;
        while (this.adj[v].length) this.removeEdge(v, this.adj[v].pop()[0]);
        delete this.adj[v];
        return this;
    }
}

module.exports = WeightedUndirectedGraph;
