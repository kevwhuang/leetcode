/**
 * @param {number[][]} grid
 * @return {number}
 */

module.exports = function orangesRotting(grid) {
    let minutes = 0;
    while (true) {
        const rotten = [];
        let stateFresh = false;
        for (let row = 0; row < grid.length; row++) {
            for (let col = 0; col < grid[0].length; col++) {
                if (grid[row][col] === 1) stateFresh = true;
                else if (grid[row][col] === 2) rotten.push([row, col]);
            }
        }
        if (!rotten.length) return stateFresh ? -1 : minutes;
        let stateChange = null;
        for (const [x, y] of rotten) {
            if (grid?.[x + 1]?.[y] === 1) { grid[x + 1][y] = stateChange = 2; }
            if (grid?.[x - 1]?.[y] === 1) { grid[x - 1][y] = stateChange = 2; }
            if (grid?.[x]?.[y + 1] === 1) { grid[x][y + 1] = stateChange = 2; }
            if (grid?.[x]?.[y - 1] === 1) { grid[x][y - 1] = stateChange = 2; }
            grid[x][y] = 0;
        }
        if (stateChange) minutes++;
    }
};
