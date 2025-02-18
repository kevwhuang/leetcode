// 864 - Shortest Path to Get All Keys

function shortestPathAllKeys(grid) {
    let Q, tgt = 0;
    const M = grid, m = M.length, n = M[0].length;
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            const cur = M[r][c];
            if (cur === '#') continue;
            if (cur === '@') Q = [[r, c, 0]];
            else if (cur >= 'a' && cur <= 'z') tgt++;
        }
    }
    let res = 1;
    const seen = new Set([`${Q[0][0]}-${Q[0][1]}-0`]);
    const D = [0, -1, 0, 1, 0];
    while (Q.length) {
        const N = [];
        for (let i = 0; i < Q.length; i++) {
            for (let j = 0; j < 4; j++) {
                const r = Q[i][0] + D[j], c = Q[i][1] + D[j + 1];
                if (r < 0 || r === m || c < 0 || c === n) continue;
                const cur = M[r][c];
                if (cur === '#') continue;
                let mask = Q[i][2];
                if (cur >= 'a' && cur <= 'z') {
                    mask |= 2 ** (cur.charCodeAt() - 97);
                    let acc = 0, a = mask;
                    while (a) acc += a & 1, a >>= 1;
                    if (acc === tgt) return res;
                } else if (cur >= 'A' && cur <= 'Z') {
                    if (!(mask & 2 ** (cur.charCodeAt() - 65))) continue;
                }
                const key = `${r}-${c}-${mask}`;
                if (!seen.has(key)) seen.add(key) && N.push([r, c, mask]);
            }
        }
        res++, Q = N;
    }
    return -1;
}
