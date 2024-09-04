// 18 - flatten

function flatten(arr) {
    let flat = [];
    for (let i = 0, cur; i < arr.length; i++) {
        cur = arr[i];
        if (Array.isArray(cur)) flat = [...flat, ...flatten(cur)];
        else flat.push(cur);
    }
    return flat;
}
