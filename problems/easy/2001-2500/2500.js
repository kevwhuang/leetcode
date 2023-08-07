// 2500 - Delete Greatest Value in Each Row

function deleteGreatestValue(grid) {
    let sum = 0;
    while (grid[0].length) {
        let largest = 0;
        for (let i = 0; i < grid.length; i++) {
            let pos = 0, max = 0;
            for (let j = 0; j < grid[i].length; j++) {
                if (grid[i][j] > max) {
                    pos = j;
                    max = grid[i][j];
                }
            }
            largest = Math.max(max, largest);
            grid[i].splice(pos, 1);
        }
        sum += largest;
    }
    return sum;
}
