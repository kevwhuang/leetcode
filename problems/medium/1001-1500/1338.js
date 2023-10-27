// 1338 - Reduce Array Size to the Half

function minSetSize(arr) {
    const obj = {};
    for (let i = 0; i < arr.length; i++) {
        obj[arr[i]] = (obj[arr[i]] || 0) + 1;
    }
    const freqs = [...Object.values(obj)].sort((a, b) => b - a);
    const target = arr.length / 2;
    for (let i = 0, removed = 0; ; i++) {
        removed += freqs[i];
        if (removed >= target) return i + 1;
    }
}
