// 875 - Koko Eating Bananas

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */

function minEatingSpeed(piles, h) {
    let l = 1, r = Math.max(...piles);
    L: while (l <= r) {
        const m = l + r >> 1;
        let time = 0;
        for (let i = 0; i < piles.length; i++) {
            time += Math.ceil(piles[i] / m);
            if (time <= h) continue;
            l = m + 1;
            continue L;
        }
        r = m - 1;
    }
    return l;
}

module.exports = minEatingSpeed;
