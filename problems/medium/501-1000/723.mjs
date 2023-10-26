// 723 - Candy Crush

function candyCrush(board) {
    const m = board.length, n = board[0].length;
    while (true) {
        let isStable = true;
        for (let r = 0; r < m; r++) {
            for (let c = 0; c < n - 2;) {
                const cur = board[r][c];
                if (cur === 0) { c++; continue; }
                if (board[r][c + 1] === cur &&
                    board[r][c + 2] === cur) {
                    isStable = false;
                    while (c < n && board[r][c] === cur) {
                        board[r][c++] = -cur;
                    }
                } else c++;
            }
        }
        for (let c = 0; c < n; c++) {
            for (let r = 0; r < m - 2;) {
                const cur = Math.abs(board[r][c]);
                if (cur === 0) { r++; continue; }
                if (Math.abs(board[r + 1][c]) === cur &&
                    Math.abs(board[r + 2][c]) === cur) {
                    isStable = false;
                    while (r < m && Math.abs(board[r][c]) === cur) {
                        board[r++][c] = -cur;
                    }
                } else r++;
            }
        }
        if (isStable) return board;
        for (let c = 0; c < n; c++) {
            for (let r = m - 1, rr = m - 1; r >= 0; r--) {
                board[r][c] > 0
                    ? [board[r][c], board[rr--][c]] = [board[rr][c], board[r][c]]
                    : board[r][c] = 0;
            }
        }
    }
}
