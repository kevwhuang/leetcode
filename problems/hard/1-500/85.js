// 85 - Maximal Rectangle

function maximalRectangle(matrix) {
    let area = 0;
    const m = matrix.length, n = matrix[0].length;
    const dp = new Array(n + 1).fill(0);
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            dp[c] = matrix[r][c] === '1' ? dp[c] + 1 : 0;
        }
        const stack = [-1, 0];
        for (let i = 1; i < dp.length; i++) {
            while (stack.length >= 2 && dp[i] < dp[stack.at(-1)]) {
                const newArea = dp[stack.pop()] * (i - stack.at(-1) - 1);
                area = Math.max(newArea, area);
            }
            stack.push(i);
        }
    }
    return area;
}
