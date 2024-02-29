// 1559 - Detect Cycles in 2D Grid

function containsCycle(grid) {
    function dfs(r, c, dir) {
        if (isCycle) return;
        if (r === -1 || r === m || c === -1 || c === n) return;
        if (seen.has(r) && seen.get(r).has(c)) return isCycle = true;
        if (grid[r][c] !== cur) return;
        if (!seen.has(r)) seen.set(r, new Set());
        seen.get(r).add(c);
        grid[r][c] = null;
        if (dir !== 'D') dfs(r - 1, c, 'U');
        if (dir !== 'U') dfs(r + 1, c, 'D');
        if (dir !== 'R') dfs(r, c - 1, 'L');
        if (dir !== 'L') dfs(r, c + 1, 'R');
    }
    const m = grid.length, n = grid[0].length;
    let isCycle, cur, seen;
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] === null) continue;
            isCycle = false;
            cur = grid[r][c];
            seen = new Map();
            dfs(r, c);
            if (isCycle) return true;
        }
    }
    return false;
}
