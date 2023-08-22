// 1243 - Array Transformation

function transformArray(arr) {
    while (true) {
        const copy = [...arr];
        let isOperated = false;
        for (let i = 1; i < arr.length - 1; i++) {
            const num = copy[i];
            if (num < copy[i - 1] && num < copy[i + 1]) {
                arr[i]++;
                isOperated = true;
            } else if (num > copy[i - 1] && num > copy[i + 1]) {
                arr[i]--;
                isOperated = true;
            }
        }
        if (!isOperated) return arr;
    }
}
