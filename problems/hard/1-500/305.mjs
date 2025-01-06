// 305 - Number of Islands II

function numIslands2(m, n, positions) {
    const find = v => v === uf[v] ? v : uf[v] = find(uf[v]);
    let islands = 0;
    const uf = new Array(m * n);
    const dr = [-1, 1, 0, 0], dc = [0, 0, -1, 1];
    for (let i = 0; i < positions.length; i++) {
        const r = positions[i][0], c = positions[i][1];
        let root = n * r + c;
        if (uf[root] !== undefined) {
            positions[i] = islands;
            continue;
        }
        islands++, uf[root] = root;
        for (let j = 0; j < 4; j++) {
            const rr = r + dr[j], cc = c + dc[j];
            if (rr === -1 || rr === m || cc === -1 || cc === n) continue;
            const neighbor = n * rr + cc;
            if (uf[neighbor] === undefined) continue;
            if (root === find(neighbor)) continue;
            islands--, uf[root] = root = uf[neighbor];
        }
        positions[i] = islands;
    }
    return positions;
}
