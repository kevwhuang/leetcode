// 1619 - Mean of Array After Removing Some Elements

function trimMean(arr) {
    arr = new Uint32Array(arr).sort();
    let sum = 0;
    const d = arr.length / 20;
    for (let i = d; i < arr.length - d; i++) {
        sum += arr[i];
    }
    return sum / (arr.length - d - d);
}
