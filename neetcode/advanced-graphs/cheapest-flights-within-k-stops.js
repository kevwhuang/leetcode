// 787 - Cheapest Flights Within K Stops

/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */

function findCheapestPrice(n, flights, src, dst, k) {
    const adj = {};
    for (let i = 0; i < flights.length; i++) {
        const from = flights[i][0];
        adj[from] ??= new Array(n).fill(-1);
        adj[from][from] = 0;
        adj[from][flights[i][1]] = flights[i][2];
    }
    if (!adj[src]) return -1;
    const prices = new Array(n).fill(Infinity);
    let queue = [[src, 0]];
    while (queue.length && ~k--) {
        const nextQueue = [];
        for (let i = 0; i < queue.length; i++) {
            const price = queue[i][1];
            const costs = adj[queue[i][0]];
            for (let v = 0; v < n; v++) {
                if (costs[v] <= 0) continue;
                const nextCost = price + costs[v];
                if (nextCost >= prices[v]) continue;
                prices[v] = nextCost;
                if (!adj[v]) continue;
                nextQueue.push([v, nextCost]);
            }
        }
        queue = nextQueue;
    }
    return prices[dst] === Infinity ? -1 : prices[dst];
}

module.exports = findCheapestPrice;
