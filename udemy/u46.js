// 46 - Selection Sort

function selectionSort(arr, comparator = (a, b) => a < b ? -1 : 1) {
    for (let i = 0; i < arr.length; i++) {
        let idx = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (comparator(arr[j], arr[idx]) < 0) idx = j;
        }
        if (idx !== i) [arr[i], arr[idx]] = [arr[idx], arr[i]];
    }
    return arr;
}
