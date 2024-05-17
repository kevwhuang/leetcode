// 2517 - Maximum Tastiness of Candy Basket

function maximumTastiness(price, k) {
    price.sort((a, b) => a - b);
    let tastiness, l = 0, r = price[price.length - 1] - price[0];
    while (l <= r) {
        const m = l + r >> 1;
        let candies = 1, i = 0;
        while (i < price.length) {
            let j = i;
            while (++j < price.length) {
                if (price[j] - price[i] < m) continue;
                candies++;
                break;
            }
            i = j;
        }
        if (candies < k) r = m - 1;
        else l = (tastiness = m) + 1;
    }
    return tastiness;
}
