// 773 - Sliding Puzzle

function slidingPuzzle(board) {
    const dict = {
        0: [1, 3], 1: [0, 2, 4], 2: [1, 5],
        3: [0, 4], 4: [1, 3, 5], 5: [2, 4],
    };
    let res = 1, queue = [board[0].concat(board[1])];
    const seen = new Set([queue[0].join('')]);
    if (seen.has('123450')) return 0;
    while (queue.length) {
        const nextQueue = [];
        for (let i = 0; i < queue.length; i++) {
            const cur = queue[i].indexOf(0), dirs = dict[cur];
            for (let j = 0; j < dirs.length; j++) {
                const next = [...queue[i]];
                next[cur] = next[dirs[j]];
                next[dirs[j]] = 0;
                const key = next.join('');
                if (key === '123450') return res;
                if (seen.has(key)) continue;
                seen.add(key);
                nextQueue.push(next);
            }
        }
        res++, queue = nextQueue;
    }
    return -1;
}
