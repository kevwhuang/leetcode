// 827 - Making a Large Island

function largestIsland(grid) {
    function dfs(r, c) {
        if (!validate(r, c) || !M[r][c]) return;
        M[r][c] = 0, size++;
        cells.push([r, c]);
        dfs(r - 1, c);
        dfs(r + 1, c);
        dfs(r, c - 1);
        dfs(r, c + 1);
    }
    const validate = (r, c) => r >= 0 && r < n && c >= 0 && c < n;
    let largest = 1, id = -1, cells, size;
    const sizes = new Map(), M = grid, n = M.length;
    for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
            if (M[r][c] !== 1) continue;
            cells = [], size = 0;
            dfs(r, c);
            largest = Math.max(size, largest);
            for (let i = 0; i < cells.length; i++) {
                M[cells[i][0]][cells[i][1]] = id;
            }
            sizes.set(id--, size);
        }
    }
    for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
            if (M[r][c] !== 0) continue;
            const set = new Set();
            if (validate(r - 1, c) && M[r - 1][c] < 0) set.add(M[r - 1][c]);
            if (validate(r + 1, c) && M[r + 1][c] < 0) set.add(M[r + 1][c]);
            if (validate(r, c - 1) && M[r][c - 1] < 0) set.add(M[r][c - 1]);
            if (validate(r, c + 1) && M[r][c + 1] < 0) set.add(M[r][c + 1]);
            size = 1;
            set.forEach(id => size += sizes.get(id));
            largest = Math.max(size, largest);
        }
    }
    return largest;
}
