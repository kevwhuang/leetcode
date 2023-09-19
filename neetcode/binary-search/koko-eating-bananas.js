// 875 - Koko Eating Bananas

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */

function minEatingSpeed(piles, h) {
    let l = 1, r = Math.max(...piles), m, time;
    loop: while (l <= r) {
        m = Math.floor((l + r) / 2);
        time = 0;
        for (let i = 0; i < piles.length; i++) {
            time += Math.ceil(piles[i] / m);
            if (time > h) {
                l = m + 1;
                continue loop;
            }
        }
        r = m - 1;
    }
    return l;
}

module.exports = minEatingSpeed;
