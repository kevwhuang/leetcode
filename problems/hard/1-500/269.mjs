// 269 - Alien Dictionary

function alienOrder(words) {
    const adj = new Map();
    for (let i = 0; i < words.length; i++) {
        const w = words[i];
        for (let j = 0; j < w.length; j++) {
            if (!adj.has(w[j])) adj.set(w[j], [0]);
        }
    }
    for (let i = 1; i < words.length; i++) {
        const w1 = words[i - 1], w2 = words[i];
        if (w1.length > w2.length && w1.startsWith(w2)) return '';
        const bound = Math.min(w1.length, w2.length);
        for (let j = 0; j < bound; j++) {
            const c1 = w1[j], c2 = w2[j];
            if (c1 === c2) continue;
            adj.get(c1).push(c2);
            adj.get(c2)[0]++;
            break;
        }
    }
    let queue = [];
    for (const v of adj.keys()) {
        if (adj.get(v)[0] === 0) queue.push(v);
    }
    let order = '';
    while (queue.length) {
        const nextQueue = [];
        for (let i = 0; i < queue.length; i++) {
            const u = queue[i], neighbors = adj.get(u);
            for (let j = 1; j < neighbors.length; j++) {
                const v = neighbors[j];
                if (--adj.get(v)[0] === 0) nextQueue.push(v);
            }
            order += u;
        }
        queue = nextQueue;
    }
    return order.length === adj.size ? order : '';
}
