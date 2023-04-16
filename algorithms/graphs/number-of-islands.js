/**
 * @param {string[][]} grid
 * @return {number}
 */

module.exports = function numIslands(grid) {
    const HEIGHT = grid.length;
    const WIDTH = grid[0].length;
    let islands = 0;
    for (let y = 0; y < HEIGHT; y++) {
        for (let x = 0; x < WIDTH; x++) {
            if (grid[y][x] === '1') {
                grid[y][x] = null;
                const queue = [[y, x]];
                const explore = (offX, offY) => {
                    const testY = queue[0][0] + offY;
                    const testX = queue[0][1] + offX;
                    if (testY < 0 || testX < 0 ||
                        testY >= HEIGHT || testX >= WIDTH) return;
                    if (grid[testY][testX] === '1') {
                        grid[testY][testX] = null;
                        queue.push([testY, testX]);
                    }
                };
                while (queue.length) {
                    explore(1, 0);
                    explore(-1, 0);
                    explore(0, 1);
                    explore(0, -1);
                    queue.shift();
                }
                islands++;
            }
        }
    }
    return islands;
};
