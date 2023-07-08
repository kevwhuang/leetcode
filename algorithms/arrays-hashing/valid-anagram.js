/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

module.exports = function isAnagram(s, t) {
    if (s.length !== t.length) return false;
    const map = new Map();
    for (const letter of s) {
        map.set(letter, map.get(letter) + 1 || 1);
    }
    for (const letter of t) {
        if (!map.get(letter)) return false;
        map.set(letter, map.get(letter) - 1);
    }
    return true;
};
