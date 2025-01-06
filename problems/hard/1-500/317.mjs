// 317 - Shortest Distance From All Buildings

function shortestDistance(grid) {
    let min, cur = 1;
    const M = grid, m = M.length, n = M[0].length;
    const C = Array.from({ length: m }, () => new Uint16Array(n));
    const D = [0, -1, 0, 1, 0];
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (M[r][c] !== 1) continue;
            min = Infinity, cur--;
            let acc = 1, Q = [[r, c]];
            while (Q.length) {
                const N = [];
                for (let i = 0; i < Q.length; i++) {
                    for (let j = 0; j < 4; j++) {
                        const rr = Q[i][0] + D[j];
                        if (rr === -1 || rr === m) continue;
                        const cc = Q[i][1] + D[j + 1];
                        if (cc === -1 || cc === n) continue;
                        if (M[rr][cc] !== cur) continue;
                        M[rr][cc]--, C[rr][cc] += acc;
                        min = Math.min(C[rr][cc], min);
                        N.push([rr, cc]);
                    }
                }
                acc++, Q = N;
            }
        }
    }
    return min === Infinity ? -1 : min;
}
