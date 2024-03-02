// 2814 - Minimum Time Takes to Reach Destination Without Drowning

function minimumSeconds(land) {
    const validate = (r, c) => r >= 0 && r < m && c >= 0 && c < n;
    const m = land.length, n = land[0].length;
    let queue1 = [], queue2 = [];
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (land[r][c] === '*') queue1.push([r, c]);
            else if (land[r][c] === 'S') queue2.push([r, c]);
        }
    }
    let seconds = 1;
    const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    while (queue2.length) {
        const nextQueue1 = [];
        for (let i = 0; i < 4; i++) {
            const dr = dirs[i][0], dc = dirs[i][1];
            for (let j = 0; j < queue1.length; j++) {
                const r = queue1[j][0] + dr, c = queue1[j][1] + dc;
                if (!validate(r, c)) continue;
                if (land[r][c] !== '.') continue;
                land[r][c] = '*';
                nextQueue1.push([r, c]);
            }
        }
        const nextQueue2 = [];
        for (let i = 0; i < 4; i++) {
            const dr = dirs[i][0], dc = dirs[i][1];
            for (let j = 0; j < queue2.length; j++) {
                const r = queue2[j][0] + dr, c = queue2[j][1] + dc;
                if (!validate(r, c)) continue;
                if (land[r][c] === 'D') return seconds;
                if (land[r][c] !== '.') continue;
                land[r][c] = '*';
                nextQueue2.push([r, c]);
            }
        }
        seconds++;
        queue1 = nextQueue1;
        queue2 = nextQueue2;
    }
    return -1;
}
