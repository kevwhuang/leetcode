// 3238 - Find the Number of Winning Players

function winningPlayerCount(n, pick) {
    const mat = Array.from({ length: n }, () => new Uint8Array(11));
    pick.forEach(e => mat[e[0]][e[1]]++);
    return mat.reduce((s, row, i) => s + row.some(e => e > i), 0);
}
