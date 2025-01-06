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
            const M = Array.from({ length: 8 }, () => new Array(len));
            for (let i = 0; i < len; i++) {
                const r = island[i][0], c = island[i][1];
                M[0][i] = [-r, -c], M[1][i] = [-r, c];
                M[2][i] = [r, -c], M[3][i] = [r, c];
                M[4][i] = [-c, -r], M[5][i] = [-c, r];
                M[6][i] = [c, -r], M[7][i] = [c, r];
            }
            let key;
            for (let i = 0; i < 8; i++) {
                M[i].sort((a, b) => a[0] - b[0] || a[1] - b[1]);
                const r = M[i][0][0], c = M[i][0][1];
                for (let j = 1; j < len; j++) {
                    M[i][j][0] -= r, M[i][j][1] -= c;
                }
                M[i][0][0] = M[i][0][1] = 0;
                const serial = JSON.stringify(M[i]);
                if (!key || serial < key) key = serial;
            }
            set.add(key);
        }
    }
    return set.size;
}
