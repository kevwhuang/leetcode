// 286 - Walls and Gates

function wallsAndGates(rooms) {
    const m = rooms.length, n = rooms[0].length;
    const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (rooms[r][c] !== 0) continue;
            let dist = 1, queue = [[r, c]];
            while (queue.length) {
                const newQueue = [];
                for (let i = 0; i < queue.length; i++) {
                    const [rr, cc] = queue[i];
                    for (const [dr, dc] of dirs) {
                        if (rooms[rr + dr]?.[cc + dc] > dist) {
                            rooms[rr + dr][cc + dc] = dist;
                            newQueue.push([rr + dr, cc + dc]);
                        }
                    }
                }
                dist++;
                queue = newQueue;
            }
        }
    }
    return rooms;
}
