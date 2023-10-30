// 490 - The Maze

function hasPath(maze, start, destination) {
    maze[start[0]][start[1]] = -1;
    const [rr, cc] = destination;
    let queue = [start];
    while (queue.length) {
        const newQueue = [];
        for (let i = 0; i < queue.length; i++) {
            let [r, c] = queue[i];
            if (maze[r - 1]?.[c] <= 0) {
                while (maze[r - 1]?.[c] <= 0) r--;
                if (r === rr && c === cc) return true;
                if (maze[r][c] !== -1) newQueue.push([r, c]);
                maze[r][c] = -1;
                r = queue[i][0];
            }
            if (maze[r + 1]?.[c] <= 0) {
                while (maze[r + 1]?.[c] <= 0) r++;
                if (r === rr && c === cc) return true;
                if (maze[r][c] !== -1) newQueue.push([r, c]);
                maze[r][c] = -1;
                r = queue[i][0];
            }
            if (maze[r]?.[c - 1] <= 0) {
                while (maze[r]?.[c - 1] <= 0) c--;
                if (r === rr && c === cc) return true;
                if (maze[r][c] !== -1) newQueue.push([r, c]);
                maze[r][c] = -1;
                c = queue[i][1];
            }
            if (maze[r]?.[c + 1] <= 0) {
                while (maze[r]?.[c + 1] <= 0) c++;
                if (r === rr && c === cc) return true;
                if (maze[r][c] !== -1) newQueue.push([r, c]);
                maze[r][c] = -1;
            }
        }
        queue = newQueue;
    }
    return false;
}
