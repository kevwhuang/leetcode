// 1091 - Shortest Path in Binary Matrix

function shortestPathBinaryMatrix(grid) {
    const validate = (r, c) => r >= 0 && r < n && c >= 0 && c < n;
    const n = grid.length;
    if (n === 1 && grid[0][0] === 0) return 1;
    if (grid[0][0] === 1 || grid[n - 1][n - 1] === 1) return -1;
    const dirs = [
        { dr: -1, dc: -1 }, { dr: -1, dc: 0 }, { dr: -1, dc: 1 }, { dr: 0, dc: -1 },
        { dr: 0, dc: 1 }, { dr: 1, dc: -1 }, { dr: 1, dc: 0 }, { dr: 1, dc: 1 },
    ];
    let queue = [[0, 0]], len = 2;
    while (queue.length) {
        const nextQueue = [];
        for (let i = 0; i < queue.length; i++) {
            const r = queue[i][0], c = queue[i][1];
            for (let j = 0; j < 8; j++) {
                const rr = r + dirs[j].dr, cc = c + dirs[j].dc;
                if (!validate(rr, cc)) continue;
                if (grid[rr][cc] === 1) continue;
                if (rr === n - 1 && cc === n - 1) return len;
                grid[rr][cc] = 1;
                nextQueue.push([rr, cc]);
            }
        }
        queue = nextQueue;
        len++;
    }
    return -1;
}
