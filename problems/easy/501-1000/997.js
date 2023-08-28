// 997 - Find the Town Judge

function findJudge(n, trust) {
    if (n === 1) return 1;
    const set = new Set();
    const map = new Map();
    for (let i = 0; i < trust.length; i++) {
        set.add(trust[i][0]);
        map.set(trust[i][1], map.get(trust[i][1]) + 1 || 1);
    }
    for (const [key, val] of map.entries()) {
        if (!set.has(key) && val === n - 1) return key;
    }
    return -1;
}
