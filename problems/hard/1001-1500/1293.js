// 1293 - Shortest Path in a Grid With Obstacles Elimination

function shortestPath(grid, k) {
    const m = grid.length, n = grid[0].length;
    if (m === 1 && n === 1) return 0;
    let acc = 1, Q = [[0, 0, k]];
    const seen = Array.from({ length: m }, () => new Array(n).fill(-1));
    const D = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    while (Q.length) {
        const N = [];
        for (let i = 0; i < Q.length; i++) {
            const r = Q[i][0], c = Q[i][1], bombs = Q[i][2];
            for (let j = 0; j < 4; j++) {
                const rr = r + D[j][0], cc = c + D[j][1];
                if (rr === -1 || rr === m || cc === -1 || cc === n) continue;
                if (bombs <= seen[rr][cc]) continue;
                if (rr === m - 1 && cc === n - 1) return acc;
                const next = grid[rr][cc] ? bombs - 1 : bombs;
                seen[rr][cc] = next;
                N.push([rr, cc, next]);
            }
        }
        acc++, Q = N;
    }
    return -1;
}
