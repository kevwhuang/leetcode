// 743 - Network Delay Time

/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

function networkDelayTime(times, n, k) {
    const C = new Uint32Array(n + 1).fill(1e9);
    C[k] = 0;
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < times.length; j++) {
            const v = times[j][1];
            C[v] = Math.min(C[times[j][0]] + times[j][2], C[v]);
        }
    }
    let res = 0, v = 0;
    while (++v <= n) {
        res = Math.max(C[v], res);
        if (res === 1e9) return -1;
    }
    return res;
}

module.exports = networkDelayTime;
