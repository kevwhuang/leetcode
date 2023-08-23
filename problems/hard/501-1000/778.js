// 778 - Swim in Rising Water

function swimInWater(grid) {
    function dfs(r, c) {
        if (end || !validate(r, c)) return;
        if (seen[r][c] || grid[r][c] > m) return;
        if (r === nn && c === nn) return end = true;
        seen[r][c] = 1;
        dfs(r - 1, c);
        dfs(r + 1, c);
        dfs(r, c - 1);
        dfs(r, c + 1);
    }
    const validate = (r, c) => r >= 0 && r < n && c >= 0 && c < n;
    const n = grid.length, nn = n - 1;
    let l = 0, r = n * n - 1, m, end, seen;
    while (l <= r) {
        m = l + r >> 1, end = false;
        seen = Array.from({ length: n }, () => new Uint8Array(n));
        dfs(0, 0);
        if (end) r = m - 1;
        else l = m + 1;
    }
    return l;
}
