class UndirectedGraph {
    constructor() {
        this.adj = {};
    }

    bfs(v) {
        v = this.#setEntry(v);
        if (!v) return [];
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

    dfs(v) {
        function traverse(vert) {
            res.push(vert);
            visited.add(vert);
            const edges = adj[vert];
            for (let i = 0; i < edges.length; i++) {
                !visited.has(edges[i]) && traverse(edges[i]);
            }
        }
        v = this.#setEntry(v);
        if (!v) return [];
        const res = [];
        const visited = new Set();
        const adj = this.adj;
        traverse(v);
        return res;
    }

    dfsIterative(v) {
        v = this.#setEntry(v);
        if (!v) return [];
        const res = [];
        const visited = new Set([v]);
        const stack = [v];
        while (stack.length) {
            const node = stack.pop();
            res.push(node);
            const edges = this.adj[node];
            for (let i = 0, vert; i < edges.length; i++) {
                vert = edges[i];
                if (visited.has(vert)) continue;
                visited.add(vert);
                stack.push(vert);
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

    #setEntry(v) {
        if (v) {
            return this.adj[v] ? v : null;
        } else {
            for (const key in this.adj) return key;
            return null;
        }
    }
}
