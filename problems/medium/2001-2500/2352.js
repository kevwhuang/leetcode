// 2352 - Equal Row and Column Pairs

function equalPairs(grid) {
    const len = grid.length, map = new Map();
    for (let r = 0, cur; r < len; r++) {
        cur = String(grid[r]);
        map.set(cur, map.get(cur) + 1 || 1);
    }
    let pairs = 0;
    for (let c = 0, column, cur; c < len; c++) {
        column = new Array(len);
        for (let r = 0; r < len; r++) {
            column[r] = grid[r][c];
        }
        cur = String(column);
        if (map.has(cur)) pairs += map.get(cur);
    }
    return pairs;
}
