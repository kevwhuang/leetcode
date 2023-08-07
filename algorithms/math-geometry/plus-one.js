// 66 - Plus One

/**
 * @param {number[]} digits
 * @return {number[]}
 */

function plusOne(digits) {
    return String(BigInt(digits.join('')) + 1n).split('');
}

module.exports = plusOne;
