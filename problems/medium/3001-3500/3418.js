// 3418 - Maximum Amount of Money Robot Can Earn

function maximumAmount(coins) {
    const dp = coins, m = dp.length, n = dp[0].length;
    dp[0][0] = [dp[0][0], 0, 0];
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (r === 0 && c === 0) continue;
            const arr = new Array(3).fill(-Infinity), cur = dp[r][c];
            for (let i = 0; i < 3; i++) {
                if (r) arr[i] = Math.max(dp[r - 1][c][i] + cur, arr[i]);
                if (c) arr[i] = Math.max(dp[r][c - 1][i] + cur, arr[i]);
                if (cur >= 0 || i === 0) continue;
                if (r) arr[i] = Math.max(dp[r - 1][c][i - 1], arr[i]);
                if (c) arr[i] = Math.max(dp[r][c - 1][i - 1], arr[i]);
            }
            dp[r][c] = arr;
        }
    }
    return Math.max(...dp[m - 1][n - 1]);
}
