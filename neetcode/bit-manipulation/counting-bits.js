// 338 - Counting Bits

/**
 * @param {number} n
 * @return {number[]}
 */

function countBits(n) {
    const output = new Array(n + 1);
    for (let i = 0; i <= n; i++) {
        let num = i,
            count = 0;
        while (num) {
            num & 1 && count++;
            num >>= 1;
        }
        output[i] = count;
    }
    return output;
}

module.exports = countBits;
