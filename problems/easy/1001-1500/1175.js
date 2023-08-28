// 1175 - Prime Arrangements

function numPrimeArrangements(n) {
    if (n <= 2) return 1;
    const primes = [2, 3, 5, 7, 11, 13, 17,
        19, 23, 29, 31, 37, 41, 43, 47, 53,
        59, 61, 67, 71, 73, 79, 83, 89, 97,
    ];
    let count = 0;
    for (let i = 0; i < 25; i++) {
        if (primes[i] <= n) count++;
        else break;
    }
    let perms = 1;
    for (let i = 2; i <= count; i++) {
        perms *= i;
        perms %= 1e9 + 7;
    }
    for (let i = 2; i <= n - count; i++) {
        perms *= i;
        perms %= 1e9 + 7;
    }
    return perms;
}
