// 1074 - Number of Submatrices That Sum to Target

function numSubmatrixSumTarget(matrix, target) {
    const m = matrix.length, n = matrix[0].length;
    for (let r = 0; r < m; r++) {
        for (let c = 1; c < n; c++) {
            matrix[r][c] += matrix[r][c - 1];
        }
    }
    let submatrices = 0;
    for (let c1 = 0; c1 < n; c1++) {
        for (let c2 = c1; c2 < n; c2++) {
            let acc = 0;
            const map = new Map([[0, 1]]);
            for (let r = 0; r < m; r++) {
                acc += matrix[r][c2] - (c1 ? matrix[r][c1 - 1] : 0);
                submatrices += map.get(acc - target) ?? 0;
                map.set(acc, (map.get(acc) ?? 0) + 1);
            }
        }
    }
    return submatrices;
}
