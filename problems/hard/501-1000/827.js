// 827 - Making a Large Island

function largestIsland(grid) {
    function dfs(r, c) {
        if (r === -1 || r === n || c === -1 || c === n) return;
        if (grid[r][c] === 0) return;
        grid[r][c] = 0;
        cells.push([r, c]);
        size++;
        dfs(r - 1, c);
        dfs(r + 1, c);
        dfs(r, c - 1);
        dfs(r, c + 1);
    }
    const n = grid.length, sizes = new Map();
    let largest = 1, id = -1, cells, size;
    for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] !== 1) continue;
            cells = [];
            size = 0;
            dfs(r, c);
            largest = Math.max(size, largest);
            for (let i = 0; i < cells.length; i++) {
                grid[cells[i][0]][cells[i][1]] = id;
            }
            sizes.set(id--, size);
        }
    }
    for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] !== 0) continue;
            const set = new Set();
            if (grid[r - 1]?.[c] < 0) set.add(grid[r - 1][c]);
            if (grid[r + 1]?.[c] < 0) set.add(grid[r + 1][c]);
            if (grid[r]?.[c - 1] < 0) set.add(grid[r][c - 1]);
            if (grid[r]?.[c + 1] < 0) set.add(grid[r][c + 1]);
            size = 1;
            for (const id of set) {
                size += sizes.get(id);
            }
            largest = Math.max(size, largest);
        }
    }
    return largest;
}
