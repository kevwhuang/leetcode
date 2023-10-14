// 2894 - Divisible and Non-Divisible Sums Difference

function differenceOfSums(n, m) {
    const totalSum = (1 + n) * n / 2;
    const divisableCount = ~~(n / m);
    const divisableSum = (m + m * divisableCount) * divisableCount / 2;
    return totalSum - 2 * divisableSum;
}
