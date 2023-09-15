// 3 - Longest Substring Without Repeating Characters

/**
 * @param {string} s
 * @return {number}
 */

function lengthOfLongestSubstring(s) {
    let set = new Set(), max = 0, l = 0;
    for (let r = 0; r < s.length; r++) {
        while (set.has(s[r])) set.delete(s[l++]);
        set.add(s[r]);
        max = Math.max(set.size, max);
    }
    return max;
}

module.exports = lengthOfLongestSubstring;
