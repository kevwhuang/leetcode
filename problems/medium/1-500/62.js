// 62 - Unique Paths

function uniquePaths(m, n) {
    function init() {
        memo = Array.from({ length: 100 }, () => new Uint32Array(100));
        for (let r = 0; r < 100; r++) {
            memo[r][0] = memo[0][r] = 1;
        }
        for (let r = 1; r < 100; r++) {
            for (let c = 1; c < 100; c++) {
                memo[r][c] = memo[r - 1][c] + memo[r][c - 1];
            }
        }
    }
    if (this.memo === undefined) init();
    return memo[m - 1][n - 1];
}
