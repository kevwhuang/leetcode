// 2757 - Generate Circular Array Values

function* cycleGenerator(arr, startIndex) {
    const n = arr.length;
    while (true) {
        const shift = yield arr[startIndex];
        startIndex = (startIndex + n + shift % n) % n;
    }
}
