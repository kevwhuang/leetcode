// 999 - Available Captures for Rook

function numRookCaptures(board) {
    let row, col;
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (board[i][j] === 'R') {
                row = i;
                col = j;
                break;
            }
        }
    }
    let captures = 0;
    for (let i = row; i >= 0; --i) {
        if (board[i][col] === 'B') break;
        if (board[i][col] === 'p') {
            captures++;
            break;
        }
    }
    for (let i = row; i < 8; ++i) {
        if (board[i][col] === 'B') break;
        if (board[i][col] === 'p') {
            captures++;
            break;
        }
    }
    for (let i = col; i >= 0; --i) {
        if (board[row][i] === 'B') break;
        if (board[row][i] === 'p') {
            captures++;
            break;
        }
    }
    for (let i = col; i < 8; ++i) {
        if (board[row][i] === 'B') break;
        if (board[row][i] === 'p') {
            captures++;
            break;
        }
    }
    return captures;
}
