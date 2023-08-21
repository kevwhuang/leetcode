// 1086 - High Five

function highFive(items) {
    items.sort((a, b) => a[0] === b[0] ? b[1] - a[1] : a[0] - b[0]);
    const res = [];
    let i = 0;
    let current;
    while (i < items.length) {
        current = items[i][0];
        let sum = items[i][1];
        sum += items[i + 1][1];
        sum += items[i + 2][1];
        sum += items[i + 3][1];
        sum += items[i + 4][1];
        res.push([current, Math.trunc(sum / 5)]);
        i += 5;
        while (items[i]?.[0] === current) i++;
    }
    return res;
}
