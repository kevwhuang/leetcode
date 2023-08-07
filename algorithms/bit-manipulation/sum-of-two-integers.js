// 371 - Sum of Two Integers

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */

function getSum(a, b) {
    let carry;
    while (b) {
        carry = (a & b) << 1;
        a = a ^ b;
        b = carry;
    }
    return a;
}

module.exports = getSum;
