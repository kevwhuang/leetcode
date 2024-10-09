// 1284 - Minimum Number of Flips to Convert Binary Matrix to Zero Matrix

function minFlips(mat) {
    const clone = state => JSON.parse(JSON.stringify(state));
    const flip = (r, c) => state[r][c] = state[r][c] ? 0 : 1;
    const flatten = state => state.reduce((s, e) => s + e.join(''), '');
    const m = mat.length, n = mat[0].length;
    const seen = new Set([flatten(mat)]);
    const target = '0'.repeat(m * n);
    if (seen.keys().next().value === target) return 0;
    let steps = 1, queue = [mat], state;
    while (queue.length) {
        const nextQueue = [];
        for (let i = 0; i < queue.length; i++) {
            for (let r = 0; r < m; r++) {
                for (let c = 0; c < n; c++) {
                    state = clone(queue[i]);
                    flip(r, c);
                    if (r) flip(r - 1, c);
                    if (r + 1 < m) flip(r + 1, c);
                    if (c) flip(r, c - 1);
                    if (c + 1 < n) flip(r, c + 1);
                    const serial = flatten(state);
                    if (serial === target) return steps;
                    if (seen.has(serial)) continue;
                    seen.add(serial);
                    nextQueue.push(state);
                }
            }
        }
        if (nextQueue.length === 0) return -1;
        steps++, queue = nextQueue;
    }
    return steps;
}
