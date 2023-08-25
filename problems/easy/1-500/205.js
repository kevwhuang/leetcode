// 205 - Isomorphic Strings

function isIsomorphic(s, t) {
    const map = new Map();
    for (let i = 0, cur; i < s.length; i++) {
        cur = s[i];
        if (map.has(cur)) {
            if (map.get(cur) !== t[i]) return false;
        } else {
            map.set(cur, t[i]);
        }
    }
    return map.size === new Set(map.values()).size;
}
