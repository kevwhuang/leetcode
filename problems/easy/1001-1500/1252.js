// 1252 - Cells With Odd Values in a Matrix

function oddCells(m, n, indices) {
    const rows = new Uint8Array(m);
    const cols = new Uint8Array(n);
    for (let i = 0; i < indices.length; i++) {
        rows[indices[i][0]]++;
        cols[indices[i][1]]++;
    }
    let count = 0;
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if ((rows[r] + cols[c]) % 2) count++;
        }
    }
    return count;
}
