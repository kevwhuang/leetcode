// 864 - Shortest Path to Get All Keys

function shortestPathAllKeys(grid) {
    let tgt = 0, Q;
    const M = grid, m = M.length, n = M[0].length;
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            const cur = M[r][c];
            if (cur === '#') continue;
            if (cur === '@') Q = [[r, c, 0]];
            else if ('a' <= cur && cur <= 'z') tgt++;
        }
    }
    let res = 1;
    const seen = new Set([`${Q[0][0]}-${Q[0][1]}-0`]);
    const D = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    while (Q.length) {
        const N = [];
        for (let i = 0; i < 4; i++) {
            const dr = D[i][0], dc = D[i][1];
            for (let j = 0; j < Q.length; j++) {
                const r = Q[j][0] + dr, c = Q[j][1] + dc;
                if (r === -1 || r === m || c === -1 || c === n) continue;
                const cur = M[r][c];
                if (cur === '#') continue;
                let mask = Q[j][2];
                if ('a' <= cur && cur <= 'z') {
                    mask |= 2 ** (cur.charCodeAt() - 97);
                    let acc = 0, num = mask;
                    while (num) acc += num & 1, num >>= 1;
                    if (acc === tgt) return res;
                } else if ('A' <= cur && cur <= 'Z') {
                    if (!(mask & 2 ** (cur.charCodeAt() - 65))) continue;
                }
                const key = `${r}-${c}-${mask}`;
                if (seen.has(key)) continue;
                seen.add(key);
                N.push([r, c, mask]);
            }
        }
        res++, Q = N;
    }
    return -1;
}
