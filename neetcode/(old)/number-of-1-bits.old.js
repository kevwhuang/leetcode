/**
 * @param {number} n
 * @return {number}
 */

module.exports = function hammingWeight(n) {
    return n.toString(2).replaceAll('0', '').length;
};
