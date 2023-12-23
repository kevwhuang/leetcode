// 204 - Count Primes

function countPrimes(n) {
    const sieve = new Uint8Array(n);
    let count = 0;
    for (let i = 2; i < n; i++) {
        if (sieve[i]) continue;
        count++;
        for (let j = i * i; j < n; j += i) {
            sieve[j] = 1;
        }
    }
    return count;
}
