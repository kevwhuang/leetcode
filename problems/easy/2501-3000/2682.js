// 2682 - Find the Losers of the Circular Game

function circularGameLosers(n, k) {
    const losers = new Set();
    for (let i = 2; i <= n; i++) {
        losers.add(i);
    }
    let pos = 1,
        factor = 1;
    while (true) {
        pos = (pos + k * factor++) % n;
        !pos && (pos = n);
        if (!losers.has(pos)) break;
        losers.delete(pos);
    }
    return [...losers];
}
