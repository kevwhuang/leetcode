/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */

module.exports = function getSum(a, b) {
    while (b) {
        const carry = a & b;
        a = a ^ b;
        b = carry << 1;
    }
    return a;
};
