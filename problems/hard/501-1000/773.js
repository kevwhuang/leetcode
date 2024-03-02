// 773 - Sliding Puzzle

function slidingPuzzle(board) {
    const obj = {
        0: [1, 3], 1: [0, 2, 4], 2: [1, 5],
        3: [0, 4], 4: [1, 3, 5], 5: [2, 4],
    };
    let moves = 1;
    let queue = [board[0].concat(board[1])];
    const init = queue[0].join('');
    if (init === '123450') return 0;
    const seen = new Set([init]);
    while (queue.length) {
        const nextQueue = [];
        for (let i = 0; i < queue.length; i++) {
            const cur = queue[i].indexOf(0);
            const dirs = obj[cur];
            for (let j = 0; j < dirs.length; j++) {
                const next = [...queue[i]];
                next[cur] = next[dirs[j]];
                next[dirs[j]] = 0;
                const serial = next.join('');
                if (serial === '123450') return moves;
                if (seen.has(serial)) continue;
                seen.add(serial);
                nextQueue.push(next);
            }
        }
        moves++;
        queue = nextQueue;
    }
    return -1;
}
