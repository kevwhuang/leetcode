// 1958 - Check If Move Is Legal

function checkMove(board, rMove, cMove, color) {
    const isValid = (r, c) => r >= 0 && r < 8 && c >= 0 && c < 8;
    const antiColor = color === 'B' ? 'W' : 'B';
    const dirs = [
        [-1, -1], [-1, 0], [-1, 1], [0, -1],
        [0, 1], [1, -1], [1, 0], [1, 1],
    ];
    for (const [dr, dc] of dirs) {
        let count = 0, r = rMove + dr, c = cMove + dc;
        while (isValid(r, c) && board[r][c] === antiColor) {
            count++, r += dr, c += dc;
        }
        if (count && isValid(r, c) && board[r][c] === color) return true;
    }
    return false;
}
