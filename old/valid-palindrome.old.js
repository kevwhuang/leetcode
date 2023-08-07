/**
 * @param {string} s
 * @return {boolean}
 */

module.exports = function isPalindrome(s) {
    const str = s.toLowerCase().replaceAll(/[^a-z0-9]/g, '');
    return str === str.split('').reverse().join('');
};
