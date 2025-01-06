// 1210 - Minimum Moves to Reach Target With Rotations

function minimumMoves(grid) {
    function check(r1, c1, r2, c2) {
        return r1 === n - 1 && r1 === r2 && r1 === c2 && c1 === n - 2;
    }
    function serialize(r1, c1, r2, c2, nextQueue) {
        const key = `${r1}-${c1}-${r2}-${c2}`;
        if (seen.has(key)) return;
        seen.add(key);
        nextQueue.push([r1, c1, r2, c2]);
    }
    let acc = 1, queue = [[0, 0, 0, 1]];
    const n = grid.length, seen = new Set();
    while (queue.length) {
        const nextQueue = [];
        for (let i = 0; i < queue.length; i++) {
            const r1 = queue[i][0], c1 = queue[i][1];
            const r2 = queue[i][2], c2 = queue[i][3];
            L1: if (r1 + 1 < n && r2 + 1 < n) {
                if (check(r1 + 1, c1, r2 + 1, c2)) return acc;
                if (grid[r1 + 1][c1] || grid[r2 + 1][c2]) break L1;
                serialize(r1 + 1, c1, r2 + 1, c2, nextQueue);
            }
            L2: if (c1 + 1 < n && c2 + 1 < n) {
                if (check(r1, c1 + 1, r2, c2 + 1)) return acc;
                if (grid[r1][c1 + 1] || grid[r2][c2 + 1]) break L2;
                serialize(r1, c1 + 1, r2, c2 + 1, nextQueue);
            }
            L3: if (r1 + 1 === r2 && c1 + 1 < n) {
                if (grid[r1][c1 + 1] || grid[r1 + 1][c1 + 1]) break L3;
                serialize(r1, c1, r1, c1 + 1, nextQueue);
            }
            L4: if (c1 + 1 === c2 && r1 + 1 < n) {
                if (grid[r1 + 1][c1] || grid[r1 + 1][c1 + 1]) break L4;
                serialize(r1, c1, r1 + 1, c1, nextQueue);
            }
        }
        acc++, queue = nextQueue;
    }
    return -1;
}
