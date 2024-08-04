// 3243 - Shortest Distance After Road Addition Queries I

function shortestDistanceAfterQueries(n, queries) {
    const path = Array.from({ length: n }, (_, i) => [i + 1]);
    for (let i = 0; i < queries.length; i++) {
        path[queries[i][0]].push(queries[i][1]);
        let queue = [0], dist = 1;
        const seen = new Set();
        L: while (queue.length) {
            const nextQueue = [];
            for (let i = 0; i < queue.length; i++) {
                const neighbors = path[queue[i]];
                for (let j = 0; j < neighbors.length; j++) {
                    const next = neighbors[j];
                    if (next === n - 1) break L;
                    if (seen.has(next)) continue;
                    seen.add(next);
                    nextQueue.push(next);
                }
            }
            queue = nextQueue;
            dist++;
        }
        queries[i] = dist;
    }
    return queries;
}
