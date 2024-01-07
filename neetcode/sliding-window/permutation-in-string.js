// 567 - Permutation in String

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

function checkInclusion(s1, s2) {
    const len = s1.length;
    if (len > s2.length) return false;
    const freqs = new Array(26).fill(0);
    for (let i = 0; i < len; i++) {
        freqs[s1.charCodeAt(i) - 97]++;
        freqs[s2.charCodeAt(i) - 97]--;
    }
    for (let i = len; i < s2.length; i++) {
        if (!freqs.some(Boolean)) return true;
        freqs[s2.charCodeAt(i - len) - 97]++;
        freqs[s2.charCodeAt(i) - 97]--;
    }
    return !freqs.some(Boolean);
}

module.exports = checkInclusion;
