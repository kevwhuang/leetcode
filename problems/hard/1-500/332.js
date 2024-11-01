// 332 - Reconstruct Itinerary

function findItinerary(tickets) {
    const adj = {};
    for (let i = 0; i < tickets.length; i++) {
        adj[tickets[i][0]] ??= [];
        adj[tickets[i][0]].push(tickets[i][1]);
    }
    for (const key in adj) {
        adj[key].sort().reverse();
    }
    const res = [], stack = ['JFK'];
    while (stack.length) {
        while (adj[stack.at(-1)]?.length) stack.push(adj[stack.at(-1)].pop());
        res.push(stack.pop());
    }
    return res.reverse();
}
