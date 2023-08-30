// 59 - Spiral Matrix II

function generateMatrix(n) {
    const M = new Array(n).fill().map(() => new Array(n));
    const bound = n * n + 1;
    let i = 1, r = 0, c = -1;
    while (true) {
        while (true) {
            M[r][++c] = i++;
            if (c === n - 1 || M[r][c + 1]) break;
        }
        if (i === bound) return M;
        while (true) {
            M[++r][c] = i++;
            if (r === n - 1 || M[r + 1][c]) break;
        }
        if (i === bound) return M;
        while (true) {
            M[r][--c] = i++;
            if (c === 0 || M[r][c - 1]) break;
        }
        if (i === bound) return M;
        while (true) {
            M[--r][c] = i++;
            if (r === 0 || M[r - 1][c]) break;
        }
        if (i === bound) return M;
    }
}
