function selectionSort(arr) {
    for (let i = 0, pos; i < arr.length; i++) {
        pos = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[pos]) pos = j;
        }
        if (pos !== i) [arr[i], arr[pos]] = [arr[pos], arr[i]];
    }
    return arr;
}
