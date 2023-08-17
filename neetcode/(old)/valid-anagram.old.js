/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

module.exports = function isAnagram(s, t) {
    return s.split('').sort().join('') === t.split('').sort().join('');
};
