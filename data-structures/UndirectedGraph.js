class UndirectedGraph {
    constructor() {
        this.adj = {};
    }
    bfs(v) {
        v = this.#setEntry(v);
        if (v === undefined) return [];
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
    dfs(v) {
        function traverse(vert) {
            res.push(vert);
            seen.add(vert);
            const edges = adj[vert];
            for (let i = 0; i < edges.length; i++) {
                if (!seen.has(edges[i])) traverse(edges[i]);
            }
        }
        v = this.#setEntry(v);
        if (v === undefined) return [];
        const res = [];
        const seen = new Set();
        const adj = this.adj;
        traverse(v);
        return res;
    }
    dfsIterative(v) {
        v = this.#setEntry(v);
        if (v === undefined) return [];
        const res = [];
        const seen = new Set([v]);
        const stack = [v];
        while (stack.length) {
            const node = stack.pop();
            res.push(node);
            const edges = this.adj[node];
            for (let i = 0; i < edges.length; i++) {
                const neighbor = edges[i];
                if (seen.has(neighbor)) continue;
                seen.add(neighbor);
                stack.push(neighbor);
            }
        }
        return res;
    }
    insertEdge(v1, v2) {
        if (!this.adj[v1] || !this.adj[v2]) return false;
        this.adj[v1].push(v2);
        this.adj[v2].push(v1);
        return this;
    }
    insertVertex(v) {
        if (this.adj[v]) return false;
        this.adj[v] = [];
        return this;
    }
    removeEdge(v1, v2) {
        if (!this.adj[v1] || !this.adj[v2]) return false;
        this.adj[v1] = this.adj[v1].filter(v => v !== v2);
        this.adj[v2] = this.adj[v2].filter(v => v !== v1);
        return this;
    }
    removeVertex(v) {
        if (!this.adj[v]) return false;
        while (this.adj[v].length) this.removeEdge(v, this.adj[v].pop());
        delete this.adj[v];
        return this;
    }
    unionFind() {
        function union(v1, v2) {
            const p1 = find(v1);
            const p2 = find(v2);
            if (p1 < p2) uf[p2] = p1;
            else uf[p1] = p2;
        }
        function find(v) {
            while (v !== uf[v]) {
                uf[v] = uf[uf[v]];
                v = uf[v];
            }
            return v;
        }
        const edges = this.#getEdges();
        const n = edges.at(-1)[1] + 1;
        const uf = Array.from({ length: n }, (_, i) => i);
        for (let i = 0; i < edges.length; i++) {
            union(edges[i][0], edges[i][1]);
        }
        return uf;
    }
    #getEdges() {
        const edges = new Set();
        for (const v in this.adj) {
            for (const neighbor of this.adj[v]) {
                edges.add([+v, neighbor].sort((a, b) => a - b).join(','));
            }
        }
        return [...edges].map(v => v.split(',').map(v => +v));
    }
    #setEntry(v) {
        if (v === undefined) return;
        return this.adj[v] ? v : Object.keys(obj)[0];
    }
}

module.exports = UndirectedGraph;
