/**
 * @param {string} s
 * @return {number}
 */

module.exports = function countSubstrings(s) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < s.length - i; j++) {
            const str = s.substr(j, i + 1);
            if (str === str.split('').reverse().join('')) count++;
        }
    }
    return count;
};
