// 424 - Longest Repeating Character Replacement

function characterReplacement(s, k) {
    let longest = 1, local = 1;
    const map = new Map();
    for (let l = 0, r = 0; r < s.length; r++) {
        const freq = map.get(s[r]) + 1 || 1;
        map.set(s[r], freq);
        local = Math.max(freq, local);
        if (k + local < r - l + 1) map.set(s[l], map.get(s[l++]) - 1);
        longest = Math.max(r - l + 1, longest);
    }
    return longest;
}
