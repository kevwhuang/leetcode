// 2929 - Distribute Candies Among Children II

function distributeCandies(n, limit) {
    const calculate = n => n < 2 ? 0 : n * (n - 1) / 2;
    let ways = calculate(n + 2);
    ways -= 3 * calculate(n - limit + 1);
    ways += 3 * calculate(n - 2 * limit);
    ways -= calculate(n - 3 * limit - 1);
    return ways;
}
