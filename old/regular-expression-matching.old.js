/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

module.exports = function isMatch(s, p) {
    const match = s.match(new RegExp(p));
    return !match ? false : match[0].length === s.length;
};
