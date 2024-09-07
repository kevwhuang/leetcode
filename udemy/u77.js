// 77 - Coin Change - Greedy Algorithm

function minCoinChange(coins, amount) {
    const res = [];
    let i = coins.length;
    while (amount && ~--i) {
        while (coins[i] <= amount) {
            amount -= coins[i];
            res.push(coins[i]);
        }
    }
    return res;
}
