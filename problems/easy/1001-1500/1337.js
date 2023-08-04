// 1337 - The K Weakest Rows in a Matrix

function kWeakestRows(mat, k) {
    for (let i = 0; i < mat.length; i++) {
        const row = mat[i];
        let strength = 0;
        for (let j = 0; j < row.length; j++) {
            if (!row[j]) break;
            strength++;
        }
        mat[i] = [i, strength];
    }
    mat.sort((a, b) => a[1] - b[1]);
    const indices = new Array(k);
    for (let i = 0; i < mat.length; i++) {
        indices[i] = mat[i][0];
        if (i === k - 1) return indices;
    }
}
