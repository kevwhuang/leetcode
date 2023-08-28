// 749 - Contain Virus

function containVirus(isInfected) {
    function search(r, c) {
        infect = new Set(), next1 = new Set(), next2 = new Set();
        dfs(r, c);
        if (infect.size < max) return;
        max = infect.size, rr = r, cc = c, new1 = next1, new2 = next2;
    }
    function dfs(r, c) {
        if (M[r][c] !== target) return;
        M[r][c] = next;
        const cell = n * r + c;
        for (const [dr, dc, di, dn] of dirs) {
            const rr = r + dr, cc = c + dc;
            if (rr < 0 || rr === m || cc < 0 || cc === n) continue;
            dfs(rr, cc);
            if (M[rr][cc] || (dr ? walls1 : walls2).has(cell + dn)) continue;
            if (next) infect.add(cell + di);
            if (next > 1) (dr ? next1 : next2).add(cell + dn);
        }
    }
    const walls1 = new Set(), walls2 = new Set();
    const M = isInfected, m = M.length, n = M[0].length;
    const dirs = [[-1, 0, -n, -n], [1, 0, n, 0], [0, -1, -1, -1], [0, 1, 1, 0]];
    let target, next, max, rr, cc, infect, new1, new2, next1, next2;
    while (true) {
        target = 1, next = 2, max = 0;
        M.forEach((row, r) => row.forEach((_, c) => M[r][c] && search(r, c)));
        if (!max) return walls1.size + walls2.size;
        target = 2, next = 0;
        dfs(rr, cc);
        new1.forEach(cell => walls1.add(cell));
        new2.forEach(cell => walls2.add(cell));
        next = 1, infect = new Set();
        M.forEach((row, r) => row.forEach((_, c) => M[r][c] && dfs(r, c)));
        infect.forEach(cell => M[cell / n >> 0][cell % n] = 1);
    }
}
