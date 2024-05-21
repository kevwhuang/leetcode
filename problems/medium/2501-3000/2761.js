// 2761 - Prime Pairs With Target Sum

function findPrimePairs(n) {
    const sieve = new Uint8Array(n + 1);
    const lim1 = Math.sqrt(n + 1);
    for (let i = 2; i <= lim1; i++) {
        if (sieve[i]) continue;
        for (let j = i * i; j <= n; j += i) {
            sieve[j] = 1;
        }
    }
    const res = [];
    const lim2 = n / 2;
    for (let i = 2; i <= lim2; i++) {
        if (sieve[i] || sieve[n - i]) continue;
        res.push([i, n - i]);
    }
    return res;
}
