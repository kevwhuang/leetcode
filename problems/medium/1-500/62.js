// 62 - Unique Paths

function uniquePaths(m, n) {
    function factorial(num) {
        if (num < 2) return 1;
        if (!memo.has(num)) memo.set(num, num * factorial(num - 1));
        return memo.get(num);
    }
    const memo = new Map();
    return factorial(m + n - 2) / factorial(m - 1) / factorial(n - 1);
}
