// 10 - Regular Expression Matching

function isMatch(s, p) {
    const fill = () => new Array(p.length + 1).fill(false);
    const dp = Array.from({ length: s.length + 1 }, fill);
    dp[0][0] = true;
    for (let i = 0; i < p.length; i++) {
        dp[0][i + 1] = p.charAt(i) === '*' ? dp[0][i - 1] : false;
    }
    for (let r = 0; r < s.length; r++) {
        for (let c = 0; c < p.length; c++) {
            if (p.charAt(c) === '*') {
                if (s.charAt(r) === p.charAt(c - 1) || p.charAt(c - 1) === '.') {
                    dp[r + 1][c + 1] = dp[r + 1][c - 1] || dp[r][c + 1];
                } else {
                    dp[r + 1][c + 1] = dp[r + 1][c - 1];
                }
            } else if (s.charAt(r) === p.charAt(c) || p.charAt(c) === '.') {
                dp[r + 1][c + 1] = dp[r][c];
            }
        }
    }
    return dp[s.length][p.length];
}
