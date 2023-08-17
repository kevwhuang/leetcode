/**
 * @param {string[][]} board
 * @return {string[][]}
 */

module.exports = function solve(board) {
    const C = board[0].length;
    const R = board.length;
    let nulls = [];
    for (let row = 1; row < R - 1; row++) {
        for (let col = 1; col < C - 1; col++) {
            if (board[row][col] === 'O') {
                const queue = [[row, col]];
                const region = [[row, col]];
                let isSurrounded = true;
                board[row][col] = null;
                while (queue.length) {
                    function explore(shiftR, shiftC) {
                        const r = queue[0][0] + shiftR;
                        const c = queue[0][1] + shiftC;
                        if (board?.[r]?.[c] === 'O') {
                            board[r][c] = null;
                            queue.push([r, c]);
                            region.push([r, c]);
                            if (r === 0 || r === R - 1 || c === 0 || c === C - 1) {
                                isSurrounded = false;
                            }
                        }
                    }
                    explore(1, 0);
                    explore(-1, 0);
                    explore(0, 1);
                    explore(0, -1);
                    queue.shift();
                }
                if (isSurrounded) for (const [row, col] of region) board[row][col] = 'X';
                else nulls = nulls.concat(region);
            }
        }
    }
    for (const [row, col] of nulls) board[row][col] = 'O';
    return board;
};
