/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

module.exports = function multiply(num1, num2) {
    return String(BigInt(num1) * BigInt(num2));
};
