// 3476 - Maximize Profit From Task Assignment

function maxProfit(workers, tasks) {
    const M = tasks, map = new Map();
    M.forEach(([a, b]) => map.has(a) ? map.get(a).push(b) : map.set(a, [b]));
    map.forEach(e => e.sort((a, b) => a - b));
    const res = workers.reduce((s, e) => s + (map.get(e)?.pop() ?? 0), 0);
    let max = 0;
    map.forEach(e => max = Math.max(e.at(-1) ?? 0, max));
    return res + max;
}
