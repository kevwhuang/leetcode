// 3 - Longest Substring Without Repeating Characters

/**
 * @param {string} s
 * @return {number}
 */

function lengthOfLongestSubstring(s) {
    const set = new Set();
    let max = 0;
    for (let l = 0, r = 0; r < s.length; r++) {
        while (set.has(s[r])) set.delete(s[l++]);
        set.add(s[r]);
        max = Math.max(set.size, max);
    }
    return max;
}

module.exports = lengthOfLongestSubstring;
