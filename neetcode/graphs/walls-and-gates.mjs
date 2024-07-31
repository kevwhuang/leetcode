// 286 - Walls and Gates

/**
 * @param {number[][]} rooms
 * @return {void}
 */

function wallsAndGates(rooms) {
    const validate = (r, c) => r >= 0 && r < m && c >= 0 && c < n;
    const m = rooms.length, n = rooms[0].length;
    const dirs = [0, -1, 0, 1, 0];
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (rooms[r][c] !== 0) continue;
            let dist = 1, queue = [[r, c]];
            while (queue.length) {
                const nextQueue = [];
                for (let i = 0; i < queue.length; i++) {
                    for (let j = 0; j < 4; j++) {
                        const rr = queue[i][0] + dirs[j];
                        const cc = queue[i][1] + dirs[j + 1];
                        if (!validate(rr, cc)) continue;
                        if (rooms[rr][cc] <= dist) continue;
                        rooms[rr][cc] = dist;
                        nextQueue.push([rr, cc]);
                    }
                }
                dist++, queue = nextQueue;
            }
        }
    }
    return rooms;
}

module.exports = wallsAndGates;
