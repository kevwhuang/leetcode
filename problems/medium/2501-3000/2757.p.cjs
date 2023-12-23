// 2757 - Generate Circular Array Values

function* cycleGenerator(arr, startIndex) {
    const len = arr.length;
    while (true) {
        const shift = yield arr[startIndex];
        startIndex = (startIndex + len + shift % len) % len;
    }
}
