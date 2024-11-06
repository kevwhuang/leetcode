// 371 - Sum of Two Integers

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */

function getSum(a, b) {
    while (a) [a, b] = [(a & b) << 1, a ^ b];
    return b;
}

module.exports = getSum;
