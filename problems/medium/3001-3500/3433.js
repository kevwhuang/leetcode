// 3433 - Count Mentions Per User

function countMentions(numberOfUsers, events) {
    events.sort((a, b) => +a[1] - +b[1] || (a[0] < b[0] ? 1 : -1));
    const res = new Array(numberOfUsers).fill(0);
    const set = new Set(Object.keys(res)), map = new Map();
    let acc = 0, i = -1;
    while (++i < events.length) {
        const s = events[i][0], t = events[i][2], cur = Number(events[i][1]);
        if (s === 'OFFLINE') set.delete(t);
        if (s === 'OFFLINE' && map.set(t, cur + 60)) continue;
        if (t === 'ALL' && ++acc) continue;
        if (t !== 'HERE') t.split` `.forEach(e => res[e.slice(2)]++);
        if (t !== 'HERE') continue;
        map.forEach((e, key) => e <= cur && set.add(key) && map.delete(key));
        set.forEach(e => res[e]++);
    }
    res.forEach((_, i) => res[i] += acc);
    return res;
}
