// 7 - Reverse Integer

/**
 * @param {number} x
 * @return {number}
 */

function reverse(x) {
    let rvs = parseInt(x.toString().split('').reverse().join(''));
    x < 0 && (rvs *= -1);
    return rvs > 2147483647 || rvs < -2147483647 ? 0 : rvs;
}

module.exports = reverse;
