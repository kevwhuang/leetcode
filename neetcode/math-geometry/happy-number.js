// 202 - Happy Number

/**
 * @param {number} n
 * @return {boolean}
 */

function isHappy(n) {
    const set = new Set([n]);
    let str, sum;
    while (n !== 1) {
        str = String(n);
        sum = 0;
        for (let i = 0; i < str.length; i++) {
            sum += str[i] ** 2;
        }
        if (set.has(sum)) return false;
        set.add(sum);
        n = sum;
    }
    return true;
}

module.exports = isHappy;
