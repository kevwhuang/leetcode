// 7 - Reverse Integer

/**
 * @param {number} x
 * @return {number}
 */

function reverse(x) {
    let res = 0;
    while (x) res = 10 * res + x % 10, x = x / 10 >> 0;
    return res > -2147483647 && res < 2147483647 ? res : 0;
}

module.exports = reverse;
