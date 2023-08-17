/**
 * @param {array[][]} board
 * @return {boolean}
 */

module.exports = function isValidSudoku(board) {
    const all = [];
    const boxes = [
        [1, 2, 3, 10, 11, 12, 19, 20, 21],
        [4, 5, 6, 13, 14, 15, 22, 23, 24],
        [7, 8, 9, 16, 17, 18, 25, 26, 27],
        [28, 29, 30, 37, 38, 39, 46, 47, 48],
        [31, 32, 33, 40, 41, 42, 49, 50, 51],
        [34, 35, 36, 43, 44, 45, 52, 53, 54],
        [55, 56, 57, 64, 65, 66, 73, 74, 75],
        [58, 59, 60, 67, 68, 69, 76, 77, 78],
        [61, 62, 63, 70, 71, 72, 79, 80, 81],
    ];
    let random = 0;
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] === '.') board[i][j] += random++;
        }
    }
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) all.push(board[i][j]);
    }
    for (const indexes of boxes) {
        const box = new Set();
        for (const i of indexes) box.add(all[i - 1]);
        if (box.size !== 9) return false;
    }
    for (let i = 0; i < 9; i++) {
        if (new Set(board[i]).size !== 9) return false;
        const column = new Set();
        for (let j = 0; j < 9; j++) column.add(board[j][i]);
        if (column.size !== 9) return false;
    }
    return true;
};
