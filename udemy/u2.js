// 2 - Multiple Pointers - countUniqueValues

function countUniqueValues(arr) {
    if (arr.length === 0) return 0;
    let cur = arr[0], count = 1;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === cur) continue;
        cur = arr[i];
        count++;
    }
    return count;
}
