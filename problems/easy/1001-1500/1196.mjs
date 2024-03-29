// 1196 - How Many Apples Can You Put Into the Basket

function maxNumberOfApples(weight) {
    weight.sort((a, b) => a - b);
    let apples = 0, addedWeight = 0;
    for (let i = 0; i < weight.length; i++) {
        if (weight[i] + addedWeight > 5000) break;
        apples++;
        addedWeight += weight[i];
    }
    return apples;
}
