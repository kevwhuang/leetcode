// 3376 - Minimum Time to Break Locks I

function findMinimumTime(strength, K) {
    function backtrack(mask, acc, d) {
        if (mask === lim) return min = Math.min(acc, min);
        if (acc >= min) return;
        for (let bit = 1, i = 0; i < strength.length; bit *= 2, i++) {
            if (mask & bit) continue;
            backtrack(mask | bit, acc + Math.ceil(strength[i] / d), d + K);
        }
    }
    let min = Infinity, lim = 1, num = strength.length;
    while (--num) lim = (lim << 1) + 1;
    backtrack(0, 0, 1);
    return min;
}
