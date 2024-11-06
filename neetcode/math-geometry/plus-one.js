// 66 - Plus One

/**
 * @param {number[]} digits
 * @return {number[]}
 */

function plusOne(digits) {
    for (let i = digits.length - 1; ~i; i--) {
        digits[i] = (digits[i] + 1) % 10;
        if (digits[i]) break;
    }
    if (digits[0] === 0) digits.unshift(1);
    return digits;
}

module.exports = plusOne;
