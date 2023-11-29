// 1926 - Nearest Exit From Entrance in Maze

function nearestExit(maze, entrance) {
    const rr = maze.length - 1, cc = maze[0].length - 1;
    const [rrr, ccc] = entrance;
    maze[rrr][ccc] = '+';
    let steps = 0, queue = [entrance];
    while (queue.length) {
        const newQueue = [];
        for (let i = 0; i < queue.length; i++) {
            const [r, c] = queue[i];
            if ((r === 0 || r === rr || c === 0 || c === cc)
                && (r !== rrr || c !== ccc)) {
                return steps;
            }
            if (maze[r - 1]?.[c] === '.') {
                maze[r - 1][c] = '+';
                newQueue.push([r - 1, c]);
            }
            if (maze[r + 1]?.[c] === '.') {
                maze[r + 1][c] = '+';
                newQueue.push([r + 1, c]);
            }
            if (maze[r]?.[c - 1] === '.') {
                maze[r][c - 1] = '+';
                newQueue.push([r, c - 1]);
            }
            if (maze[r]?.[c + 1] === '.') {
                maze[r][c + 1] = '+';
                newQueue.push([r, c + 1]);
            }
        }
        steps++;
        queue = newQueue;
    }
    return -1;
}
