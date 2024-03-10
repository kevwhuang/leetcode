// 1895 - Largest Magic Square

function largestMagicSquare(grid) {
    function getPrefixSum(r, c, matrix) {
        return r < 0 || r >= m || c < 0 || c >= n ? 0 : matrix[r][c];
    }
    const validate = (r, c) => r >= 0 && r < m && c >= 0 && c < n;
    const m = grid.length, n = grid[0].length;
    const prefixSumRow = Array.from({ length: m }, () => new Uint32Array(n));
    const prefixSumCol = Array.from({ length: m }, () => new Uint32Array(n));
    const prefixSumMainDiag = Array.from({ length: m }, () => new Uint32Array(n));
    const prefixSumAntiDiag = Array.from({ length: m }, () => new Uint32Array(n));
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            prefixSumRow[r][c] = prefixSumCol[r][c] = grid[r][c];
            if (c) prefixSumRow[r][c] += prefixSumRow[r][c - 1];
            if (r) prefixSumCol[r][c] += prefixSumCol[r - 1][c];
            prefixSumMainDiag[r][c] = prefixSumAntiDiag[r][c] = grid[r][c];
            if (validate(r - 1, c - 1)) {
                prefixSumMainDiag[r][c] += prefixSumMainDiag[r - 1][c - 1];
            }
            if (validate(r - 1, c + 1)) {
                prefixSumAntiDiag[r][c] += prefixSumAntiDiag[r - 1][c + 1];
            }
        }
    }
    for (let k = Math.min(m, n); k > 1; k--) {
        const bound1 = m - k + 1, bound2 = n - k + 1;
        for (let r = 0; r < bound1; r++) {
            L: for (let c = 0; c < bound2; c++) {
                const mainDiag = prefixSumMainDiag[r + k - 1][c + k - 1]
                    - getPrefixSum(r - 1, c - 1, prefixSumMainDiag);
                const antiDiag = prefixSumAntiDiag[r + k - 1][c]
                    - getPrefixSum(r - 1, c + k, prefixSumAntiDiag);
                if (mainDiag !== antiDiag) continue;
                const bound3 = r + k;
                for (let rr = r; rr < bound3; rr++) {
                    const row = prefixSumRow[rr][c + k - 1]
                        - getPrefixSum(rr, c - 1, prefixSumRow);
                    if (row !== mainDiag) continue L;
                }
                const bound4 = c + k;
                for (let cc = c; cc < bound4; cc++) {
                    const col = prefixSumCol[r + k - 1][cc]
                        - getPrefixSum(r - 1, cc, prefixSumCol);
                    if (col !== mainDiag) continue L;
                }
                return k;
            }
        }
    }
    return 1;
}
