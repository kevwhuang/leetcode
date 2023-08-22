// 10 - Regular Expression Matching

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

function isMatch(s, p) {
    p = p.replace(/\*+/g, '*');
    return new RegExp(`^${p}$`).test(s);
}

module.exports = isMatch;
