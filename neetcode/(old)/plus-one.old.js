/**
 * @param {number[]} digits
 * @return {number[]}
 */

module.exports = function plusOne(digits) {
    const result = String(BigInt(digits.join('')) + 1n).split('');
    for (let i = 0; i < result.length; i++) result[i] = +result[i];
    return result;
};
