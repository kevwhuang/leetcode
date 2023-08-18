// 1228 - Missing Number in Arithmetic Progression

function missingNumber(arr) {
    const step = (arr.at(-1) - arr[0]) / arr.length;
    if (!step) return arr[0];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] + step !== arr[i + 1]) return arr[i] + step;
    }
}
