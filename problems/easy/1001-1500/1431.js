// 1431 - Kids With the Greatest Number of Candies

function kidsWithCandies(candies, extraCandies) {
    const max = Math.max(...candies);
    for (let i = 0; i < candies.length; i++) {
        candies[i] = candies[i] + extraCandies >= max;
    }
    return candies;
}
