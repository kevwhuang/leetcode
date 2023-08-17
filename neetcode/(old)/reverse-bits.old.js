/**
 * @param {number} n
 * @return {number}
 */

module.exports = function reverseBits(n) {
    const binary = n.toString(2).padStart(32, '0');
    const reverse = binary.split('').reverse().join('');
    return parseInt(reverse, 2);
};
