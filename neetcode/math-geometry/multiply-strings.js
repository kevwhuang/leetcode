// 43 - Multiply Strings

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

function multiply(num1, num2) {
    return String(BigInt(num1) * BigInt(num2));
}

module.exports = multiply;
