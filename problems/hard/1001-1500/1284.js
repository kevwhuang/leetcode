// 1284 - Minimum Number of Flips to Convert Binary Matrix to Zero Matrix

function minFlips(mat) {
    const flatten = state => state.reduce((s, e) => s + e.join(''), '');
    const flip = (r, c) => state[r][c] = state[r][c] ? 0 : 1;
    const m = mat.length, n = mat[0].length;
    const seen = new Set([flatten(mat)]);
    const tgt = '0'.repeat(m * n);
    if (seen.keys().next().value === tgt) return 0;
    let acc = 1, Q = [mat], state;
    while (Q.length) {
        const N = [];
        for (let i = 0; i < Q.length; i++) {
            for (let r = 0; r < m; r++) {
                for (let c = 0; c < n; c++) {
                    state = JSON.parse(JSON.stringify(Q[i]));
                    flip(r, c);
                    if (r) flip(r - 1, c);
                    if (r + 1 < m) flip(r + 1, c);
                    if (c) flip(r, c - 1);
                    if (c + 1 < n) flip(r, c + 1);
                    const key = flatten(state);
                    if (key === tgt) return acc;
                    if (seen.has(key)) continue;
                    seen.add(key);
                    N.push(state);
                }
            }
        }
        if (N.length === 0) return -1;
        acc++, Q = N;
    }
    return acc;
}
