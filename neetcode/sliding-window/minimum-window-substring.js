// 76 - Minimum Window Substring

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

function minWindow(s, t) {
    if (s.length < t.length) return '';
    const map = new Map();
    for (let i = 0; i < t.length; i++) {
        map.set(t[i], (map.get(t[i]) ?? 0) + 1);
    }
    let min = Infinity, left, right;
    L: for (let l = 0, r = 0; r < s.length; r++) {
        if (!map.has(s[r])) continue;
        map.set(s[r], map.get(s[r]) - 1);
        while (l < r) {
            if (!map.has(s[l]) && ++l) continue;
            const f = map.get(s[l]) + 1;
            if (f > 0) break;
            map.set(s[l++], f);
        }
        for (const f of map.values()) {
            if (f > 0) continue L;
        }
        const len = r - l + 1;
        if (len >= min) continue;
        min = len, left = l, right = r;
    }
    return min === Infinity ? '' : s.slice(left, right + 1);
}

module.exports = minWindow;
