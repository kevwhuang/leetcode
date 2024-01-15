// 2596 - Check Knight Tour Configuration

function checkValidGrid(grid) {
    if (grid[0][0] !== 0) return false;
    const isValid = (r, c) => r >= 0 && r < n && c >= 0 && c < n;
    const n = grid.length, last = n * n - 1;
    const dirs = [
        [-2, -1], [-2, 1], [-1, -2], [-1, 2],
        [1, -2], [1, 2], [2, -1], [2, 1],
    ];
    for (let r = 0; r < n; r++) {
        L: for (let c = 0; c < n; c++) {
            if (grid[r][c] === last) continue;
            for (const [dr, dc] of dirs) {
                if (!isValid(r + dr, c + dc)) continue;
                if (grid[r][c] + 1 === grid[r + dr][c + dc]) continue L;
            }
            return false;
        }
    }
    return true;
}
