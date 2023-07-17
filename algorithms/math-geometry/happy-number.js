/**
 * @param {number} n
 * @return {boolean}
 */

module.exports = isHappy;

function isHappy(n) {
    const set = new Set([n]);
    let previous = n;
    while (previous !== 1) {
        let sum = 0;
        for (const digit of String(previous)) {
            sum += digit ** 2;
        }
        if (set.has(sum)) return false;
        set.add(sum);
        previous = sum;
    }
    return true;
}
