// 2427 - Number of Common Factors

function commonFactors(a, b) {
    const min = Math.min(a, b);
    let factors = 1;
    for (let i = 2; i <= min; i++) {
        a % i === 0 && b % i === 0 && factors++;
    }
    return factors;
}
