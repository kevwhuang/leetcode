// 756 - Pyramid Transition Matrix

function pyramidTransition(bottom, allowed) {
    function backtrack(i, cur) {
        if (cur.length === len) return nextQueue.add(cur);
        const chars = arr[i];
        for (let j = 0; j < chars.length; j++) {
            backtrack(i + 1, cur + chars[j]);
        }
    }
    const map = new Map();
    for (let i = 0; i < allowed.length; i++) {
        const base = allowed[i][0] + allowed[i][1];
        map.set(base, (map.get(base) ?? '') + allowed[i][2]);
    }
    let queue = new Set([bottom]);
    let nextQueue, arr, len = bottom.length;
    while (queue.size && --len > 1) {
        nextQueue = new Set();
        L: for (const row of queue) {
            arr = new Array(row.length - 1);
            for (let j = 1; j < row.length; j++) {
                const base = row[j - 1] + row[j];
                if (!map.has(base)) continue L;
                arr[j - 1] = map.get(base);
            }
            backtrack(0, '');
        }
        queue = nextQueue;
    }
    for (const base of queue) {
        if (map.has(base)) return true;
    }
    return false;
}
