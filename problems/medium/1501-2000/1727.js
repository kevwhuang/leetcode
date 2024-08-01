// 1727 - Largest Submatrix With Rearrangements

function largestSubmatrix(matrix) {
    let area = 0;
    const m = matrix.length, n = matrix[0].length;
    const dp = new Array(n).fill(0);
    for (let r = 0; r < m; r++) {
        const cols = [];
        for (let c = 0; c < n; c++) {
            if (matrix[r][c]) cols.push(++dp[c]);
            else dp[c] = 0;
        }
        cols.sort((a, b) => a - b);
        const len = cols.length;
        for (let i = 0; i < len; i++) {
            area = Math.max(cols[i] * (len - i), area);
        }
    }
    return area;
}
