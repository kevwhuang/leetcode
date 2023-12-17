// 2965 - Find Missing and Repeated Values

function findMissingAndRepeatedValues(grid) {
    const set = new Set();
    const len = grid.length, bound = len * len;
    for (let n = 1; n <= bound; n++) {
        set.add(n);
    }
    let dup;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            const cur = grid[i][j];
            if (set.has(cur)) set.delete(cur);
            else dup = cur;
        }
    }
    return [dup, set.keys().next().value];
}
