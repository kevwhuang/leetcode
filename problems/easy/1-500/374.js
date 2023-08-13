// 374 - Guess Number Higher or Lower

function guessNumber(n) {
    let l = 1;
    let r = n;
    while (l <= r) {
        const m = Math.floor((l + r) / 2);
        const res = guess(m);
        if (res === 1) l = m + 1;
        else if (res === -1) r = m - 1;
        else return m;
    }
}
