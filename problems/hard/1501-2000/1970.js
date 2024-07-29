// 1970 - Last Day Where You Can Still Cross

function latestDayToCross(row, col, cells) {
    const find = v => v === uf[v] ? v : uf[v] = find(uf[v]);
    const mat = Array.from({ length: row }, () => new Uint8Array(col));
    const uf = Array.from({ length: row * col + 2 }, (_, i) => i);
    const d = [0, -1, 0, 1, 0];
    for (let i = cells.length - 1; ~i; i--) {
        const r = cells[i][0] - 1, c = cells[i][1] - 1, id = col * r + c;
        for (let j = 0; j < 4; j++) {
            const rr = r + d[j], cc = c + d[j + 1];
            if (rr < 0 || rr === row || cc < 0 || cc === col) continue;
            if (mat[rr][cc] === 0) continue;
            uf[find(id)] = find(col * rr + cc);
        }
        if (r === 0) uf[find(id)] = find(uf.length - 2);
        if (r === row - 1) uf[find(id)] = find(uf.length - 1);
        if (find(uf.length - 2) === find(uf.length - 1)) return i;
        mat[r][c] = 1;
    }
}
