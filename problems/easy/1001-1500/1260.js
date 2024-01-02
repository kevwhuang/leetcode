// 1260 - Shift 2D Grid

function shiftGrid(grid, k) {
    const m = grid.length, n = grid[0].length;
    k %= m * n;
    if (k === 0) return grid;
    const res = Array.from({ length: m }, () => new Array(n));
    let rr = ~~(k / n), cc = k - n * rr;
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            res[rr][cc] = grid[r][c];
            if (++cc !== n) continue;
            if (rr === m - 1) rr = 0;
            else rr++;
            cc = 0;
        }
    }
    return res;
}
