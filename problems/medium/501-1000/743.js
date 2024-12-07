// 743 - Network Delay Time

function networkDelayTime(times, n, k) {
    const C = new Uint32Array(n + 1).fill(1e9);
    C[k] = 0;
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < times.length; j++) {
            const v = times[j][1];
            C[v] = Math.min(C[times[j][0]] + times[j][2], C[v]);
        }
    }
    let res = 0;
    for (let v = 1; v <= n; v++) {
        res = Math.max(C[v], res);
        if (res === 1e9) return -1;
    }
    return res;
}
