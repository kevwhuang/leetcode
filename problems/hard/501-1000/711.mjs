// 711 - Number of Distinct Islands II

function numDistinctIslands2(grid) {
    function dfs(r, c) {
        if (grid[r][c] === 0) return;
        grid[r][c] = 0;
        island.push([r, c]);
        if (r) dfs(r - 1, c);
        if (r + 1 < m) dfs(r + 1, c);
        if (c) dfs(r, c - 1);
        if (c + 1 < n) dfs(r, c + 1);
    }
    const set = new Set(), m = grid.length, n = grid[0].length;
    let island;
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] === 0) continue;
            island = [];
            dfs(r, c);
            const len = island.length;
            if (len <= 2 && set.add(len)) continue;
            const mat = Array.from({ length: 8 }, () => new Array(len));
            for (let i = 0; i < len; i++) {
                const r = island[i][0], c = island[i][1];
                mat[0][i] = [-r, -c], mat[1][i] = [-r, c];
                mat[2][i] = [r, -c], mat[3][i] = [r, c];
                mat[4][i] = [-c, -r], mat[5][i] = [-c, r];
                mat[6][i] = [c, -r], mat[7][i] = [c, r];
            }
            mat.forEach(e => e.sort((a, b) => a[0] - b[0] || a[1] - b[1]));
            let base;
            for (let i = 0; i < 8; i++) {
                const r = mat[i][0][0], c = mat[i][0][1];
                for (let j = 1; j < len; j++) {
                    mat[i][j][0] -= r, mat[i][j][1] -= c;
                }
                mat[i][0][0] = mat[i][0][1] = 0;
                const serial = JSON.stringify(mat[i]);
                if (!base || serial < base) base = serial;
            }
            set.add(base);
        }
    }
    return set.size;
}
