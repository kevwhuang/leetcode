// 242 - Valid Anagram

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

function isAnagram(s, t) {
    if (s.length !== t.length) return false;
    const bucket = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        bucket[s.charCodeAt(i) - 97]++;
    }
    for (let i = 0; i < t.length; i++) {
        if (--bucket[t.charCodeAt(i) - 97] < 0) return false;
    }
    return bucket.every(e => e === 0);
}

module.exports = isAnagram;
