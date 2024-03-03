// 2548 - Maximum Price to Fill a Bag

function maxPrice(items, capacity) {
    items.sort((a, b) => b[0] / b[1] - a[0] / a[1]);
    let price = 0;
    for (let i = 0; i < items.length; i++) {
        if (items[i][1] < capacity) {
            price += items[i][0];
            capacity -= items[i][1];
        } else {
            return price + capacity * items[i][0] / items[i][1];
        }
    }
    return -1;
}
