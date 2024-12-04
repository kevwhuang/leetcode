// 3 - Longest Substring Without Repeating Characters

/**
 * @param {string} s
 * @return {number}
 */

function lengthOfLongestSubstring(s) {
    let max = 0;
    const arr = new Int16Array(95).fill(-1);
    for (let l = 0, r = 0; r < s.length; r++) {
        const key = s.charCodeAt(r) - 32;
        l = Math.max(arr[key], l);
        max = Math.max(r - l + 1, max);
        arr[key] = r + 1;
    }
    return max;
}

module.exports = lengthOfLongestSubstring;
