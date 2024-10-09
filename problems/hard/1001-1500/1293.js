// 1293 - Shortest Path in a Grid With Obstacles Elimination

function shortestPath(grid, k) {
    const validate = (r, c) => r >= 0 && r < m && c >= 0 && c < n;
    const m = grid.length, n = grid[0].length;
    if (m === 1 && n === 1) return 0;
    let steps = 1, queue = [[0, 0, k]];
    const seen = Array.from({ length: m }, () => new Array(n).fill(-1));
    const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    while (queue.length) {
        const nextQueue = [];
        for (let i = 0; i < queue.length; i++) {
            const r = queue[i][0], c = queue[i][1], bombs = queue[i][2];
            for (let j = 0; j < 4; j++) {
                const rr = r + dirs[j][0], cc = c + dirs[j][1];
                if (!validate(rr, cc) || bombs <= seen[rr][cc]) continue;
                if (rr === m - 1 && cc === n - 1) return steps;
                const rem = grid[rr][cc] ? bombs - 1 : bombs;
                seen[rr][cc] = rem;
                nextQueue.push([rr, cc, rem]);
            }
        }
        steps++, queue = nextQueue;
    }
    return -1;
}
