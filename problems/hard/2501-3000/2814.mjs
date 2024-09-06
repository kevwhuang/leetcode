// 2814 - Minimum Time Takes to Reach Destination Without Drowning

function minimumSeconds(land) {
    function check(queue, nextQueue, flag) {
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < queue.length; j++) {
                const r = queue[j][0] + d[i], c = queue[j][1] + d[i + 1];
                if (r === -1 || r === m || c === -1 || c === n) continue;
                if (flag && land[r][c] === 'D') return true;
                if (land[r][c] !== '.') continue;
                land[r][c] = '*';
                nextQueue.push([r, c]);
            }
        }
    }
    let queue1 = [], queue2 = [];
    const m = land.length, n = land[0].length;
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (land[r][c] === '*') queue1.push([r, c]);
            else if (land[r][c] === 'S') queue2.push([r, c]);
        }
    }
    let time = 1;
    const d = [0, -1, 0, 1, 0];
    while (queue2.length) {
        const nextQueue1 = [];
        const nextQueue2 = [];
        check(queue1, nextQueue1);
        if (check(queue2, nextQueue2, true)) return time;
        time++;
        queue1 = nextQueue1;
        queue2 = nextQueue2;
    }
    return -1;
}
