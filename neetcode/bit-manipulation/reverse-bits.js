// 190 - Reverse Bits

/**
 * @param {number} n
 * @return {number}
 */

function reverseBits(n) {
    let res = 0, i = 0;
    while (i++ < 32) res = res << 1 | n & 1, n >>= 1;
    return res >>> 0;
}

module.exports = reverseBits;
