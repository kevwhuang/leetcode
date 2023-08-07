// 1207 - Unique Number of Occurrences

function uniqueOccurrences(arr) {
    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
        map.set(arr[i], map.get(arr[i]) + 1 || 1);
    }
    const set = new Set();
    for (const e of map.values()) {
        if (set.has(e)) return false;
        set.add(e);
    }
    return true;
}
