// 1122 - Relative Sort Array

function relativeSortArray(arr1, arr2) {
    const freqs = new Map();
    for (let i = 0; i < arr1.length; i++) {
        freqs.set(arr1[i], freqs.get(arr1[i]) + 1 || 1);
    }
    let index = 0;
    for (let i = 0; i < arr2.length; i++) {
        const num = arr2[i];
        const freq = freqs.get(num);
        freqs.delete(num);
        for (let j = 0; j < freq; j++) {
            arr1[index++] = num;
        }
    }
    const remaining = [...freqs.entries()];
    remaining.sort((a, b) => a[0] - b[0]);
    for (let i = 0; i < remaining.length; i++) {
        const num = remaining[i][0];
        const freq = remaining[i][1];
        for (let j = 0; j < freq; j++) {
            arr1[index++] = num;
        }
    }
    return arr1;
}
