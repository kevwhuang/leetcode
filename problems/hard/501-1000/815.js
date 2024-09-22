// 815 - Bus Routes

function numBusesToDestination(routes, source, target) {
    if (source === target) return 0;
    const map = new Map();
    for (let i = 0; i < routes.length; i++) {
        const route = routes[i];
        for (let j = 0; j < route.length; j++) {
            const cur = route[j];
            if (map.has(cur)) map.get(cur).push(i);
            else map.set(cur, [i]);
        }
    }
    if (!map.has(source) || !map.has(target)) return -1;
    let res = 1, queue = [source];
    const seen = new Uint8Array(routes.length);
    while (queue.length) {
        const nextQueue = [];
        for (let i = 0; i < queue.length; i++) {
            const nextBus = map.get(queue[i]);
            if (!nextBus) continue;
            map.delete(queue[i]);
            for (let j = 0; j < nextBus.length; j++) {
                const bus = nextBus[j];
                if (seen[bus]) continue;
                seen[bus] = 1;
                const route = routes[bus];
                for (let k = 0; k < route.length; k++) {
                    const next = route[k];
                    if (next === target) return res;
                    if (!map.has(next)) continue;
                    nextQueue.push(next);
                }
            }
        }
        res++, queue = nextQueue;
    }
    return -1;
}
