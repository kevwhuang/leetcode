// 1287 - Element Appearing More Than 25% in Sorted Array

function findSpecialInteger(arr) {
    const target = arr.length / 4;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) count++;
        else count = 1;
        if (count > target) return arr[i];
    }
}
