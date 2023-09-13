// 424 - Longest Repeating Character Replacement

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

function characterReplacement(s, k) {
    const map = new Map();
    let max = 1, local = 1, l = 0;
    for (let r = 0, freq; r < s.length; r++) {
        freq = map.get(s[r]) + 1 || 1;
        map.set(s[r], freq);
        local = Math.max(freq, local);
        k + local < r - l + 1 && map.set(s[l], map.get(s[l++]) - 1);
        max = Math.max(r - l + 1, max);
    }
    return max;
}

module.exports = characterReplacement;
