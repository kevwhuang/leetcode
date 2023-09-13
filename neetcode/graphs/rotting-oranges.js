// 994 - Rotting Oranges

/**
 * @param {number[][]} grid
 * @return {number}
 */

function orangesRotting(grid) {
    const queue = [];
    let fresh = 0;
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            grid[r][c] === 1 && fresh++;
            grid[r][c] === 2 && queue.push([r, c]);
        }
    }
    if (!fresh && !queue.length) return 0;
    let len, time = -1;
    while (queue.length) {
        len = queue.length;
        time++;
        for (let i = 0, r, c; i < len; i++) {
            [r, c] = queue.shift();
            if (grid[r - 1]?.[c] === 1) {
                grid[r - 1][c] = 2;
                queue.push([r - 1, c]);
                fresh--;
            }
            if (grid[r + 1]?.[c] === 1) {
                grid[r + 1][c] = 2;
                queue.push([r + 1, c]);
                fresh--;
            }
            if (grid[r]?.[c - 1] === 1) {
                grid[r][c - 1] = 2;
                queue.push([r, c - 1]);
                fresh--;
            }
            if (grid[r]?.[c + 1] === 1) {
                grid[r][c + 1] = 2;
                queue.push([r, c + 1]);
                fresh--;
            }
        }
    }
    return !fresh ? time : -1;
}

module.exports = orangesRotting;
