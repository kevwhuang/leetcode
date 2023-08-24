// 332 - Reconstruct Itinerary

/**
 * @param {string[][]} tickets
 * @return {string[]}
 */

function findItinerary(tickets) {
    const adj = {};
    for (let i = 0; i < tickets.length; i++) {
        adj[tickets[i][0]] ??= [];
        adj[tickets[i][0]].push(tickets[i][1]);
    }
    for (const key in adj) {
        adj[key].sort().reverse();
    }
    const itinerary = [], stack = ['JFK'];
    while (stack.length) {
        while (adj[stack.at(-1)]?.length) {
            stack.push(adj[stack.at(-1)].pop());
        }
        itinerary.push(stack.pop());
    }
    return itinerary.reverse();
}

module.exports = findItinerary;
