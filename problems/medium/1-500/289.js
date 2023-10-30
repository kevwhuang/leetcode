// 289 - Game of Life

function gameOfLife(board) {
    function neighbors(r, c) {
        let live = 0;
        board[r - 1]?.[c - 1] >= 1 && live++;
        board[r - 1]?.[c] >= 1 && live++;
        board[r - 1]?.[c + 1] >= 1 && live++;
        board[r]?.[c - 1] >= 1 && live++;
        board[r]?.[c + 1] >= 1 && live++;
        board[r + 1]?.[c - 1] >= 1 && live++;
        board[r + 1]?.[c] >= 1 && live++;
        board[r + 1]?.[c + 1] >= 1 && live++;
        return live;
    }
    const m = board.length, n = board[0].length;
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (board[r][c] === 1) {
                const live = neighbors(r, c);
                if (live !== 2 && live !== 3) board[r][c] = 2;
            } else if (board[r][c] === 0) {
                if (neighbors(r, c) === 3) board[r][c] = -1;
            }
        }
    }
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (board[r][c] === -1) board[r][c] = 1;
            else if (board[r][c] === 2) board[r][c] = 0;
        }
    }
}
