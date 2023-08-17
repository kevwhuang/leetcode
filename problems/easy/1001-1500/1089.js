// 1089 - Duplicate Zeros

function duplicateZeros(arr) {
    let i = 0;
    while (i < arr.length) {
        if (arr[i]) i++;
        else {
            arr.splice(i, 0, 0);
            arr.pop();
            i += 2;
        }
    }
}
