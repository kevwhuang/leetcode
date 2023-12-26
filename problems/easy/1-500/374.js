// 374 - Guess Number Higher or Lower

function guessNumber(n) {
    let l = 1, r = n;
    while (l <= r) {
        const m = ~~((l + r) / 2);
        const ans = guess(m);
        if (ans === 1) l = m + 1;
        else if (ans === -1) r = m - 1;
        else return m;
    }
}
