// 2952 - Minimum Number of Coins to Be Added

function minimumAddedCoins(coins, target) {
    coins.sort((a, b) => a - b);
    let added = 0, obtainable = 0, i = 0;
    while (obtainable < target) {
        if (i < coins.length && coins[i] <= obtainable + 1) {
            obtainable += coins[i++];
        } else {
            added++;
            obtainable += obtainable + 1;
        }
    }
    return added;
}
