// 909 - Snakes and Ladders

function snakesAndLadders(board) {
    function boustrophedon(roll) {
        const r = roll / n >> 0;
        const c = roll % n;
        return [n - r - 1, r & 1 ? n - c - 1 : c];
    }
    const n = board.length, win = n * n;
    let moves = 0, queue = [1];
    while (queue.length) {
        const nextQueue = [];
        for (let i = 0; i < queue.length; i++) {
            const cell = queue[i];
            if (cell === win) return moves;
            const bound = Math.min(cell + 6, win);
            for (let roll = cell + 1; roll <= bound; roll++) {
                const [r, c] = boustrophedon(roll - 1);
                if (board[r][c] === 0) continue;
                if (board[r][c] === -1) nextQueue.push(roll);
                else nextQueue.push(board[r][c]);
                board[r][c] = 0;
            }
        }
        moves++;
        queue = nextQueue;
    }
    return -1;
}
