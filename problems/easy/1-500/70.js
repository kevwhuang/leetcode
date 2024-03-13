// 70 - Climbing Stairs

function climbStairs(n) {
    const sqrt5 = Math.sqrt(5);
    const term1 = ((1 + sqrt5) / 2) ** (n + 1);
    const term2 = ((1 - sqrt5) / 2) ** (n + 1);
    return Math.round((term1 - term2) / sqrt5);
}
