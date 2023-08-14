// 1518 - Water Bottles

function numWaterBottles(numBottles, numExchange) {
    let drank = 0;
    let empty = 0;
    while (numBottles) {
        const exchange = Math.floor((empty + numBottles) / numExchange);
        drank += numBottles;
        empty = (empty + numBottles) % numExchange;
        numBottles = exchange;
    }
    return drank;
}
