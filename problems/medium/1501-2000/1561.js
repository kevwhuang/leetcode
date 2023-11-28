// 1561 - Maximum Number of Coins You Can Get

function maxCoins(piles) {
    let n = 0;
    for (let i = 0; i < piles.length; i++) {
        n = Math.max(piles[i], n);
    }
    const bucket = new Array(n + 1).fill(0);
    for (let i = 0; i < piles.length; i++) {
        bucket[piles[i]]++;
    }
    let coins = 0, seen = 0;
    const limit = piles.length * 2 / 3;
    while (seen !== limit) {
        if (bucket[n] === 0) {
            n--;
        } else {
            bucket[n]--;
            if (seen++ & 1) coins += n;
        }
    }
    return coins;
}
