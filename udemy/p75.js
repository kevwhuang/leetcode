// 75 - Graphs - Dijkstra Exercise

class WeightedGraph {
    constructor() {
        this.adj = {};
    }
    Dijkstra(v1, v2) {
        const prev = {};
        const costs = {};
        for (const v in this.adj) {
            prev[v] = null;
            costs[v] = Infinity;
        }
        costs[v1] = 0;
        const pq = new MinPriorityQueue();
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
    addEdge(v1, v2, weight) {
        this.adj[v1].push([v2, weight]);
        this.adj[v2].push([v1, weight]);
    }
    addVertex(v) {
        this.adj[v] = [];
    }
}

class MinPriorityQueue {
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
        while (this.data[top] && this.data[next] && this.data[top][1] > this.data[next][1]) {
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
