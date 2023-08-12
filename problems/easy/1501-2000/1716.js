// 1716 - Calculate Money in LeetCode Bank

function totalMoney(n) {
    let sum = 0;
    const weeks = Math.floor(n / 7);
    for (let i = 1; i <= weeks; i++) {
        sum += (i + i + 6) * 3.5;
    }
    const days = n % 7;
    sum += (weeks + weeks + days + 1) * days / 2;
    return sum;
}
