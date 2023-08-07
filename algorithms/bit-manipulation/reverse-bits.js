// 190 - Reverse Bits

/**
 * @param {number} n
 * @return {number}
 */

function reverseBits(n) {
    let reverse = 0;
    for (let i = 0; i < 32; i++) {
        reverse <<= 1;
        reverse ^= n & 1;
        n >>= 1;
    }
    return reverse >>> 0;
}

module.exports = reverseBits;
