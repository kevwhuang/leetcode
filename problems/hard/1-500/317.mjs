// 317 - Shortest Distance From All Buildings

function shortestDistance(grid) {
    let min, cur = 1;
    const m = grid.length, n = grid[0].length;
    const dists = Array.from({ length: m }, () => new Uint16Array(n));
    const d = [0, -1, 0, 1, 0];
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] !== 1) continue;
            min = Infinity, cur--;
            let dist = 1, queue = [[r, c]];
            while (queue.length) {
                const nextQueue = [];
                for (let i = 0; i < queue.length; i++) {
                    for (let j = 0; j < 4; j++) {
                        const rr = queue[i][0] + d[j];
                        if (rr === -1 || rr === m) continue;
                        const cc = queue[i][1] + d[j + 1];
                        if (cc === -1 || cc === n) continue;
                        if (grid[rr][cc] !== cur) continue;
                        grid[rr][cc]--;
                        dists[rr][cc] += dist;
                        min = Math.min(dists[rr][cc], min);
                        nextQueue.push([rr, cc]);
                    }
                }
                dist++, queue = nextQueue;
            }
        }
    }
    return min === Infinity ? -1 : min;
}
