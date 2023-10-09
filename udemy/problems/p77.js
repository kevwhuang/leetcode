// 77 - Coin Change - Greedy Algorithm

function minCoinChange(coins, amount) {
    const res = [];
    let i = coins.length - 1;
    while (amount > 0 && i >= 0) {
        while (coins[i] <= amount) {
            amount -= coins[i];
            res.push(coins[i]);
        }
        i--;
    }
    return res;
}
