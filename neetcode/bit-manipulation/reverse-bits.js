// 190 - Reverse Bits

/**
 * @param {number} n
 * @return {number}
 */

function reverseBits(n) {
    let res = 0;
    for (let bit = 0; bit < 32; bit++) {
        res = res << 1 | n & 1;
        n >>= 1;
    }
    return res >>> 0;
}

module.exports = reverseBits;
