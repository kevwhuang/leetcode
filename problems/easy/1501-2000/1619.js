// 1619 - Mean of Array After Removing Some Elements

function trimMean(arr) {
    arr.sort((a, b) => a - b);
    const delta = arr.length / 20;
    let sum = 0;
    for (let i = delta; i < arr.length - delta; i++) {
        sum += arr[i];
    }
    return sum / (arr.length - 2 * delta);
}
