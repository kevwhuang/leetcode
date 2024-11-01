// 269 - Alien Dictionary

/**
 * @param {string[]} words
 * @return {string}
 */

function alienOrder(words) {
    const adj = new Map();
    for (let i = 0; i < words.length; i++) {
        const s = words[i];
        for (let j = 0; j < s.length; j++) {
            if (!adj.has(s[j])) adj.set(s[j], [0]);
        }
    }
    for (let i = 1; i < words.length; i++) {
        const s = words[i - 1], t = words[i];
        if (s > t && s.startsWith(t)) return '';
        const lim = Math.min(s.length, t.length);
        for (let j = 0; j < lim; j++) {
            if (s[j] === t[j]) continue;
            adj.get(s[j]).push(t[j]);
            adj.get(t[j])[0]++;
            break;
        }
    }
    let res = '', queue = [];
    for (const e of adj) {
        if (e[1][0] === 0) queue.push(e[0]);
    }
    while (queue.length) {
        const nextQueue = [];
        for (let i = 0; i < queue.length; i++) {
            res += queue[i];
            const next = adj.get(queue[i]);
            for (let j = 1; j < next.length; j++) {
                if (--adj.get(next[j])[0]) continue;
                nextQueue.push(next[j]);
            }
        }
        queue = nextQueue;
    }
    return res.length === adj.size ? res : '';
}

module.exports = alienOrder;
