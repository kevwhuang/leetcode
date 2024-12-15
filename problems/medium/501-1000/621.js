// 621 - Task Scheduler

function leastInterval(tasks, n) {
    const B = new Array(26).fill(0);
    tasks.forEach(e => B[e.charCodeAt() - 65]++);
    const max = Math.max(...B);
    const sum = B.reduce((s, e) => s + (e === max), 0);
    return Math.max((n + 1) * (max - 1) + sum, tasks.length);
}
