// 1138 - Alphabet Board Path

function alphabetBoardPath(target) {
    const coords = {
        a: [0, 0], b: [0, 1], c: [0, 2], d: [0, 3], e: [0, 4],
        f: [1, 0], g: [1, 1], h: [1, 2], i: [1, 3], j: [1, 4],
        k: [2, 0], l: [2, 1], m: [2, 2], n: [2, 3], o: [2, 4],
        p: [3, 0], q: [3, 1], r: [3, 2], s: [3, 3], t: [3, 4],
        u: [4, 0], v: [4, 1], w: [4, 2], x: [4, 3], y: [4, 4],
        z: [5, 0],
    };
    let moves = '', r = 0, c = 0;
    for (let i = 0; i < target.length; i++) {
        const dr = coords[target[i]][0] - r;
        const dc = coords[target[i]][1] - c;
        if (target[i] === 'z') {
            if (dc < 0) moves += 'L'.repeat(-dc);
            else moves += 'R'.repeat(dc);
            if (dr < 0) moves += 'U'.repeat(-dr);
            else moves += 'D'.repeat(dr);
        } else {
            if (dr < 0) moves += 'U'.repeat(-dr);
            else moves += 'D'.repeat(dr);
            if (dc < 0) moves += 'L'.repeat(-dc);
            else moves += 'R'.repeat(dc);
        }
        moves += '!';
        r = coords[target[i]][0];
        c = coords[target[i]][1];
    }
    return moves;
}
