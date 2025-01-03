// 1287 - Element Appearing More Than 25% in Sorted Array

function findSpecialInteger(arr) {
    let count = 0;
    const tgt = arr.length / 4;
    for (let i = 0; i < arr.length; i++) {
        if (i && arr[i - 1] === arr[i]) count++;
        else count = 1;
        if (count > tgt) return arr[i];
    }
}
