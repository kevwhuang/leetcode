// 45 - Selection Sort

function selectionSort(arr, comparator = (a, b) => a < b ? -1 : 1) {
    for (let i = 0, pos; i < arr.length; i++) {
        pos = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (comparator(arr[j], arr[pos]) < 0) pos = j;
        }
        if (pos !== i) [arr[i], arr[pos]] = [arr[pos], arr[i]];
    }
    return arr;
}
