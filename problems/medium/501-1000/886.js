// 886 - Possible Bipartition

function possibleBipartition(n, dislikes) {
    const graph = Array.from({ length: n + 1 }, () => []);
    for (let i = 0; i < dislikes.length; i++) {
        graph[dislikes[i][0]].push(dislikes[i][1]);
        graph[dislikes[i][1]].push(dislikes[i][0]);
    }
    const group = new Uint8Array(n + 1);
    const stack = [];
    for (let node = 1; node < graph.length; node++) {
        if (group[node]) continue;
        group[node] = 1;
        stack.push(node);
        while (stack.length) {
            const u = stack.pop();
            const neighbors = graph[u];
            for (let i = 0; i < neighbors.length; i++) {
                const v = neighbors[i];
                if (group[u] === group[v]) return false;
                if (group[v]) continue;
                group[v] = group[u] === 1 ? 2 : 1;
                stack.push(v);
            }
        }
    }
    return true;
}
