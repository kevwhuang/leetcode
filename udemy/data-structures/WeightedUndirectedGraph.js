class WeightedUndirectedGraph {
    constructor() {
        this.adj = {};
    }
    dijkstra(v1, v2) {
        if (!this.adj[v1] || !this.adj[v2]) return false;
        const prev = {};
        const dists = {};
        for (const vert in this.adj) {
            prev[vert] = null;
            dists[vert] = Infinity;
        }
        dists[v1] = 0;
        const pq = new (require('./MinPriorityQueue'));
        let node = v1;
        while (pq.data.length && node !== v2) {
            for (const vert in this.adj[node]) {
                const neighbor = this.adj[node][vert][0];
                const dist = dists[node] + this.adj[node][vert][1];
                if (dist >= dists[neighbor]) continue;
                prev[neighbor] = node;
                dists[neighbor] = dist;
                pq.enqueue(neighbor, dist);
            }
            node = pq.dequeue()[0];
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
