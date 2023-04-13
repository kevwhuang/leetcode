/**
 * @param {string} s
 * @return {boolean}
 */

module.exports = function isValid(s) {
    while (1) {
        const LEN = s.length;
        if (!LEN) return true;
        s = s.replaceAll(/\(\)|\[\]|\{\}/g, '');
        if (LEN === s.length) return false;
    }
}
