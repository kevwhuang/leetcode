// 621 - Task Scheduler

function leastInterval(tasks, n) {
    const freqs = new Array(26).fill(0);
    for (let i = 0; i < tasks.length; i++) {
        freqs[tasks[i].charCodeAt(0) - 65]++;
    }
    let maxFreq = 0, maxCount = 0;
    for (let i = 0; i < 26; i++) {
        const freq = freqs[i];
        if (freq === maxFreq) {
            maxCount++;
        } else if (freq > maxFreq) {
            maxFreq = freq;
            maxCount = 1;
        }
    }
    return Math.max(tasks.length, (maxFreq - 1) * (n + 1) + maxCount);
}
