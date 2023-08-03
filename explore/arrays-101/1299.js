// 1299 - Replace Elements with Greatest Element on Right Side

function replaceElements(arr) {
    let greatest = arr.at(-1);
    for (let i = arr.length - 2; i >= 0; i--) {
        const current = arr[i];
        arr[i] = greatest;
        if (current > greatest) greatest = current;
    }
    arr[arr.length - 1] = -1;
    return arr;
}
