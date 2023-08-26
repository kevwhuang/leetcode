// 1763 - Longest Nice Substring

function longestNiceSubstring(s) {
    function check(local) {
        for (const e of local.keys()) {
            if (!local.has(e.toLowerCase())) return false;
            if (!local.has(e.toUpperCase())) return false;
        }
        return true;
    }
    const map = new Map();
    for (let i = 0; i < s.length; i++) {
        map.set(s[i], map.get(s[i]) + 1 || 1);
    }
    let end = s.length + 1;
    while (--end > 1) {
        map.get(s[end]) > 1
            ? map.set(s[end], map.get(s[end]) - 1)
            : map.delete(s[end]);
        const local = new Map(map);
        for (let i = 0, j = end - 1; j < s.length; i++, j++) {
            if (check(local)) return s.slice(i, j + 1);
            local.get(s[i]) > 1
                ? local.set(s[i], local.get(s[i]) - 1)
                : local.delete(s[i]);
            local.set(s[j + 1], local.get(s[j + 1]) + 1 || 1);
        }
    }
    return '';
}
