// 2711 - Difference of Number of Distinct Values on Diagonals

function differenceOfDistinctValues(grid) {
    const m = grid.length, n = grid[0].length;
    const ans = new Array(m);
    for (let r = 0; r < m; r++) {
        ans[r] = new Array(n);
    }
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            const topLeft = new Set(), bottomRight = new Set();
            for (let d = 1; r - d >= 0 && c - d >= 0; d++) {
                topLeft.add(grid[r - d][c - d]);
            }
            for (let d = 1; r + d < m && c + d < n; d++) {
                bottomRight.add(grid[r + d][c + d]);
            }
            ans[r][c] = Math.abs(topLeft.size - bottomRight.size);
        }
    }
    return ans;
}
