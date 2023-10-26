// 2661 - First Completely Painted Row or Column

function firstCompleteIndex(arr, mat) {
    const m = mat.length, n = mat[0].length;
    const rowIndexes = new Array(m * n + 1);
    const colIndexes = new Array(m * n + 1);
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            rowIndexes[mat[r][c]] = r;
            colIndexes[mat[r][c]] = c;
        }
    }
    const rows = {}, cols = {};
    for (let i = 0; i < arr.length; i++) {
        const r = rowIndexes[arr[i]];
        rows[r] = (rows[r] || 0) + 1;
        if (rows[r] === n) return i;
        const c = colIndexes[arr[i]];
        cols[c] = (cols[c] || 0) + 1;
        if (cols[c] === m) return i;
    }
}
