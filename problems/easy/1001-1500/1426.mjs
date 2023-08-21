// 1426 - Counting Elements

function countElements(arr) {
    const set = new Set(arr);
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        set.has(arr[i] + 1) && count++;
    }
    return count;
}
