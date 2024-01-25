// 1514 - Path With Maximum Probability

function maxProbability(n, edges, succProb, start_node, end_node) {
    const adj = {};
    const weights = new Array(n).fill(0);
    while (--n >= 0) adj[n] = [];
    for (let i = 0; i < edges.length; i++) {
        adj[edges[i][0]].push([edges[i][1], succProb[i]]);
        adj[edges[i][1]].push([edges[i][0], succProb[i]]);
    }
    const pq = new MaxPriorityQueue({ priority: e => e[1] });
    pq.enqueue([start_node, 1]);
    while (!pq.isEmpty()) {
        const [v, weight] = pq.dequeue().element;
        if (v === end_node) return weight;
        const neighbors = adj[v];
        for (let i = 0; i < neighbors.length; i++) {
            const neighbor = neighbors[i][0];
            const newWeight = neighbors[i][1] * weight;
            if (newWeight <= weights[neighbor]) continue;
            weights[neighbor] = newWeight;
            pq.enqueue([neighbor, newWeight]);
        }
    }
    return 0;
}
