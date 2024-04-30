// 357 - Count Numbers With Unique Digits

function countNumbersWithUniqueDigits(n) {
    if (n-- === 0) return 1;
    let unique = 9;
    for (let d = 0; d < n; d++) {
        unique *= 9 - d;
    }
    return unique + countNumbersWithUniqueDigits(n);
}
