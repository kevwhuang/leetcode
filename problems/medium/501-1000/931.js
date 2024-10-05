// 931 - Minimum Falling Path Sum

function minFallingPathSum(matrix) {
    const n = matrix.length;
    for (let r = 1; r < n; r++) {
        for (let c = 0; c < n; c++) {
            const left = c ? matrix[r - 1][c - 1] : Infinity;
            const right = c + 1 < n ? matrix[r - 1][c + 1] : Infinity;
            matrix[r][c] += Math.min(left, matrix[r - 1][c], right);
        }
    }
    return Math.min(...matrix.at(-1));
}
