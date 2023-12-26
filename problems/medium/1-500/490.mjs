// 490 - The Maze

function hasPath(maze, start, destination) {
    function move(dr, dc, fn) {
        if (maze[r + dr]?.[c + dc] > 0) return;
        if (dr) while (maze[r + dr]?.[c] <= 0) r += dr;
        else while (maze[r]?.[c + dc] <= 0) c += dc;
        if (r === rr && c === cc) return true;
        if (maze[r][c] !== -1) nextQueue.push([r, c]);
        maze[r][c] = -1;
        if (fn === 0) r = queue[i][0];
        else if (fn === 1) c = queue[i][1];
    }
    maze[start[0]][start[1]] = -1;
    const rr = destination[0], cc = destination[1];
    let i, r, c, queue = [start], nextQueue;
    while (queue.length) {
        i = 0, nextQueue = [];
        for (; i < queue.length; i++) {
            r = queue[i][0], c = queue[i][1];
            if (move(-1, 0, 0)) return true;
            if (move(1, 0, 0)) return true;
            if (move(0, -1, 1)) return true;
            if (move(0, 1, null)) return true;
        }
        queue = nextQueue;
    }
    return false;
}
