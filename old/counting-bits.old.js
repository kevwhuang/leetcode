/**
 * @param {number} n
 * @return {number[]}
 */

module.exports = function countBits(n) {
    const output = [];
    while (n >= 0) {
        output.unshift(n.toString(2).replaceAll('0', '').length);
        n--;
    }
    return output;
};
