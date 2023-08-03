/**
 * @param {number} n
 * @return {boolean}
 */

module.exports = isHappy;

function isHappy(n) {
    const set = new Set([n]);
    while (n !== 1) {
        const str = String(n);
        let sum = 0;
        for (let i = 0; i < str.length; i++) {
            sum += str[i] ** 2;
        }
        if (set.has(sum)) return false;
        set.add(sum);
        n = sum;
    }
    return true;
}
