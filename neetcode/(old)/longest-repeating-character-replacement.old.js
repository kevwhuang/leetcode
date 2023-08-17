/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

module.exports = function characterReplacement(s, k) {
    const map = {};
    let longestCurrent = 1, longestTotal = 1, pointer = 0;
    for (let i = 0, L = s.length; i < L; i++) {
        const char = s[i];
        map[char] = (map[char] ?? 0) + 1;
        longestCurrent = Math.max(longestCurrent, map[char]);
        if (k + longestCurrent < i - pointer + 1) map[s[pointer++]]--;
        longestTotal = Math.max(longestTotal, i - pointer + 1);
    }
    return longestTotal;
};
