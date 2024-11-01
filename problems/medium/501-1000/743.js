// 743 - Network Delay Time

function networkDelayTime(times, n, k) {
    const bf = new Uint32Array(n + 1).fill(1e9);
    bf[k] = 0;
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < times.length; j++) {
            const v = times[j][1];
            bf[v] = Math.min(bf[times[j][0]] + times[j][2], bf[v]);
        }
    }
    let max = -1;
    for (let i = 1; i <= n; i++) {
        max = Math.max(bf[i], max);
        if (max === 1e9) return -1;
    }
    return max;
}
