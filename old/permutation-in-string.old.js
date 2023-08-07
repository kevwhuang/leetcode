/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

module.exports = function checkInclusion(s1, s2) {
    s1 = s1.split('').sort().join('');
    for (const e of s2.matchAll(new RegExp(`(?=([a-z]{${s1.length}}))`, 'g'))) {
        if (e[1].split('').sort().join('') === s1) return true;
    }
    return false;
};
