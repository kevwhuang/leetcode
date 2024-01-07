// 743 - Network Delay Time

/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

function networkDelayTime(times, n, k) {
    const bf = new Array(n + 1).fill(Infinity);
    bf[k] = 0;
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < times.length; j++) {
            const edge = times[j];
            bf[edge[1]] = Math.min(bf[edge[0]] + edge[2], bf[edge[1]]);
        }
    }
    let max = -1;
    for (let i = 1; i < n + 1; i++) {
        max = Math.max(bf[i], max);
    }
    return max === Infinity ? -1 : max;
}

module.exports = networkDelayTime;
