// 827 - Making a Large Island

function largestIsland(grid) {
    function dfs(r, c) {
        if (grid[r][c] === 0) return;
        grid[r][c] = 0;
        cells.push([r, c]);
        size++;
        if (r) dfs(r - 1, c);
        if (r + 1 < n) dfs(r + 1, c);
        if (c) dfs(r, c - 1);
        if (c + 1 < n) dfs(r, c + 1);
    }
    let max = 1, id = -1, cells, size;
    const n = grid.length, map = new Map();
    for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] !== 1) continue;
            cells = [], size = 0;
            dfs(r, c);
            max = Math.max(size, max);
            for (let i = 0; i < cells.length; i++) {
                grid[cells[i][0]][cells[i][1]] = id;
            }
            map.set(id--, size);
        }
    }
    for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] !== 0) continue;
            const set = new Set();
            if (r && grid[r - 1][c] < 0) set.add(grid[r - 1][c]);
            if (r + 1 < n && grid[r + 1][c] < 0) set.add(grid[r + 1][c]);
            if (c && grid[r][c - 1] < 0) set.add(grid[r][c - 1]);
            if (c + 1 < n && grid[r][c + 1] < 0) set.add(grid[r][c + 1]);
            size = 1;
            for (const id of set) {
                size += map.get(id);
            }
            max = Math.max(size, max);
        }
    }
    return max;
}
