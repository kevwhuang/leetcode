/**
 * @param {number} x
 * @return {number}
 */

module.exports = function reverse(x) {
    let out = parseInt(x.toString().split('').reverse().join(''));
    x < 0 && (out *= -1);
    return out > 2 ** 31 - 1 || out < -(2 ** 31) ? 0 : out;
};
