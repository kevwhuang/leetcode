// 1200 - Minimum Absolute Difference

function minimumAbsDifference(arr) {
    arr.sort((a, b) => a - b);
    let pairs = [];
    let minDiff = Infinity;
    for (let i = 1; i < arr.length; i++) {
        const diff = Math.abs(arr[i] - arr[i - 1]);
        if (diff === minDiff) pairs.push([arr[i - 1], arr[i]]);
        else if (diff < minDiff) {
            pairs = [[arr[i - 1], arr[i]]];
            minDiff = diff;
        }
    }
    return pairs;
}
