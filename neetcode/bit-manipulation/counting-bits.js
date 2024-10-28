// 338 - Counting Bits

/**
 * @param {number} n
 * @return {number[]}
 */

function countBits(n) {
    const res = new Uint8Array(n + 1);
    for (let i = 0; i <= n; i++) {
        res[i] = res[i >> 1] + (i & 1);
    }
    return res;
}

module.exports = countBits;
