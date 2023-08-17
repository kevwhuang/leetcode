/**
 * @param {number} n
 * @return {boolean}
 */

module.exports = function isHappy(n) {
    let previous = n;
    let set = new Set();
    while (true) {
        let total = 0;
        for (const e of String(previous)) total += e ** 2;
        if (total === 1) return true;
        if (set.has(total)) return false;
        else set.add(total);
        previous = total;
    }
};
