// 47 - Insertion Sort

function insertionSort(arr, comparator = (a, b) => a < b ? -1 : 1) {
    for (let i = 1; i < arr.length; i++) {
        for (let j = i - 1; j >= 0; j--) {
            if (comparator(arr[j], arr[j + 1]) < 0) break;
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
    }
    return arr;
}
