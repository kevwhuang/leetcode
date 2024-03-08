// 2664 - The Knight's Tour

function tourOfKnight(m, n, r, c) {
    function dfs(r, c, move) {
        if (board[r][c] >= 0) return;
        board[r][c] = move;
        if (move === target) return true;
        for (let i = 0; i < 8; i++) {
            const rr = r + dirs[i][0], cc = c + dirs[i][1];
            if (rr < 0 || rr >= m || cc < 0 || cc >= n) continue;
            if (dfs(rr, cc, move + 1)) return true;
        }
        board[r][c] = -1;
    }
    const board = Array.from({ length: m }, () => new Array(n).fill(-1));
    const target = m * n - 1;
    const dirs = [
        [-2, -1], [-2, +1], [-1, -2], [-1, +2],
        [+1, -2], [+1, +2], [+2, -1], [+2, +1],
    ];
    dfs(r, c, 0);
    return board;
}
