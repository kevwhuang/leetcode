/**
 * @param {string} s
 * @return {number}
 */

module.exports = function lengthOfLongestSubstring(s) {
    let LENGTH = s.length;
    let longest = 0;
    for (let i = 0; i < LENGTH; i++) {
        if (LENGTH - i < longest) break;
        let substring = s[i];
        for (let j = i + 1; j < LENGTH; j++) {
            if (substring.includes(s[j])) break;
            else substring += s[j];
        }
        longest = Math.max(longest, substring.length);
    }
    return longest;
};
