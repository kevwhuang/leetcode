// 2642 - Design Graph With Shortest Path Calculator

class Graph {
    constructor(n, edges) {
        this.adj = {};
        for (let i = 0; i < edges.length; i++) {
            this.addEdge(edges[i]);
        }
    }
    addEdge(edge) {
        const v = edge[0];
        if (v in this.adj) this.adj[v].push(edge.slice(1));
        else this.adj[v] = [[edge[1], edge[2]]];
    }
    shortestPath(node1, node2) {
        const costs = { [node1]: 0 };
        const pq = new MinimumPriorityQueue();
        pq.enqueue(node1, 0);
        while (pq.data.length > 1) {
            const [v, cost] = pq.dequeue();
            if (v === node2) return costs[node2];
            if (!(v in this.adj)) continue;
            const neighbors = this.adj[v];
            for (let i = 0; i < neighbors.length; i++) {
                const neighbor = neighbors[i][0];
                const newCost = neighbors[i][1] + cost;
                if (newCost >= costs[neighbor]) continue;
                costs[neighbor] = newCost;
                pq.enqueue(neighbor, newCost);
            }
        }
        return -1;
    }
}

class MinimumPriorityQueue {
    constructor() {
        this.data = [null];
    }
    dequeue() {
        if (this.data.length === 1) return null;
        if (this.data.length === 2) return this.data.pop();
        const entry = this.data[1];
        this.data[1] = this.data.pop();
        let top = 1, l = 2, r = 3;
        let next = !this.data[r] || this.data[l][1] < this.data[r][1] ? l : r;
        while (this.data[top]?.[1] > this.data[next]?.[1]) {
            [this.data[top], this.data[next]] = [this.data[next], this.data[top]];
            [top, l, r] = [next, 2 * next, 2 * next + 1];
            next = !this.data[r] || this.data[l][1] < this.data[r][1] ? l : r;
        }
        return entry;
    }
    enqueue(val, priority) {
        this.data.push([val, priority]);
        let index = this.data.length - 1, parent = ~~(index / 2);
        while (parent && priority < this.data[parent][1]) {
            [this.data[index], this.data[parent]] = [this.data[parent], this.data[index]];
            [index, parent] = [parent, ~~(parent / 2)];
        }
        return val;
    }
}
