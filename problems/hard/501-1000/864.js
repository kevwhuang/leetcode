// 864 - Shortest Path to Get All Keys

function shortestPathAllKeys(grid) {
    function serialize(r, c, bitmask, nextQueue) {
        const serial = `${r}-${c}-${bitmask}`;
        if (seen.has(serial)) return;
        seen.add(serial);
        nextQueue.push([r, c, bitmask]);
    }
    function count(num) {
        let bits = 0;
        while (num) {
            if (num & 1) bits++;
            num >>= 1;
        }
        return bits;
    }
    const validate = (r, c) => r >= 0 && r < m && c >= 0 && c < n;
    const isLowercase = char => 'a' <= char && char <= 'z';
    const isUppercase = char => 'A' <= char && char <= 'Z';
    const bit = (char, offset) => 2 ** (char.charCodeAt() - offset);
    let target = 0, queue;
    const m = grid.length, n = grid[0].length;
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            const cur = grid[r][c];
            if (cur === '#') continue;
            if (cur === '@') queue = [[r, c, 0]];
            else if (isLowercase(cur)) target++;
        }
    }
    let moves = 1;
    const seen = new Set([`${queue[0][0]}-${queue[0][1]}-0`]);
    const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    while (queue.length) {
        const nextQueue = [];
        for (let i = 0; i < 4; i++) {
            const dr = dirs[i][0], dc = dirs[i][1];
            for (let j = 0; j < queue.length; j++) {
                const r = queue[j][0] + dr, c = queue[j][1] + dc;
                if (!validate(r, c) || grid[r][c] === '#') continue;
                let cur = grid[r][c], bitmask = queue[j][2];
                if (isLowercase(cur)) {
                    bitmask |= bit(cur, 97);
                    if (count(bitmask) === target) return moves;
                } else if (isUppercase(cur)) {
                    if (!(bitmask & bit(cur, 65))) continue;
                }
                serialize(r, c, bitmask, nextQueue);
            }
        }
        moves++, queue = nextQueue;
    }
    return -1;
}
