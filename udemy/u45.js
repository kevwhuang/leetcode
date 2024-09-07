// 45 - Bubble Sort

function bubbleSort(arr, comparator = (a, b) => a < b ? -1 : 1) {
    let swapped = true, bound = arr.length;
    while (swapped) {
        swapped = false, bound--;
        for (let i = 0; i < bound; i++) {
            if (comparator(arr[i], arr[i + 1]) < 0) continue;
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
            swapped = true;
        }
    }
    return arr;
}
