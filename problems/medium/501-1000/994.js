// 994 - Rotting Oranges

function orangesRotting(grid) {
    const m = grid.length, n = grid[0].length;
    let fresh = 0, queue = [];
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] === 1) fresh++;
            else if (grid[r][c] === 2) queue.push([r, c]);
        }
    }
    if (fresh === 0 && !queue.length) return 0;
    const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    let time = -1;
    while (queue.length) {
        const nextQueue = [];
        for (let i = 0; i < queue.length; i++) {
            const r = queue[i][0], c = queue[i][1];
            for (let j = 0; j < 4; j++) {
                const dr = dirs[j][0], dc = dirs[j][1];
                if (grid[r + dr]?.[c + dc] !== 1) continue;
                grid[r + dr][c + dc] = 2;
                nextQueue.push([r + dr, c + dc]);
                fresh--;
            }
        }
        time++;
        queue = nextQueue;
    }
    return fresh ? -1 : time;
}
